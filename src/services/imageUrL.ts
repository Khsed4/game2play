const getCroppedImageURL = (url: string) => {
  const index = url.indexOf("media/") + "media".length;
  return url.slice(0, index) + "/crop/600/400/" + url.slice(index);
};
export default getCroppedImageURL;
