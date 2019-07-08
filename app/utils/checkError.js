/* eslint-disable eqeqeq */

const checkForStatus = response => {
  if (response.data) {
    if (response.data.code) {
      return {
        status: response.data.code,
        message: response.data.message,
      };
    }
  }
};

export default function(response) {
  const r = response.response;
  if (!r) {
    const responseStatus = checkForStatus(response);
    return responseStatus;
  }
  // if(response.data) {
  //     if (response.data.data) {
  //         return false
  //     }
  // }

  if (r.status) {
    return {
      status: r.status,
      message: '',
    };
  }

  if (!r.data) {
    return true;
  }

  return false;
}
