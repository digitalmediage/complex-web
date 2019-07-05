export default function(response) {
  const r = response.response;
  if (!r) return false;


  // eslint-disable-next-line eqeqeq
  if (r.status == 403) {
    if (r.data) {
          console.log(r.data);
          console.log(r.data);
          console.log(r.data);
          console.log(r.status);
      return '403';
    }
  }

  return true;
}
