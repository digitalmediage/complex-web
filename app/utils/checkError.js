/* eslint-disable eqeqeq */
export default function(response) {
  const r = response.response;
  //   if (!r) return false;

  if (r.status == 403) {
    if (r.data) {
      console.log(r.data);
      console.log(r.data);
      console.log(r.data);
      console.log(r.status);
      return '403';
    }
  }

  if (r.data.code == 401) {
    return '401';
  }

  return true;
}
