function ConvertBase64Image(image: any) {
  if (!image) {
    return "";
  } else {
    return new Buffer(image, "base64").toString("binary");
  }
}

export default ConvertBase64Image;
