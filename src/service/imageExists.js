export const imageExists = (image_url) => {
  var http = new XMLHttpRequest();
  http.open("HEAD", image_url, false);

  if (http.status !== 404) return true;
  else return false;
};
