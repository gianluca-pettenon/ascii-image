const { readdirSync } = require('fs');
const asciify = require('asciify-image');

const definitions = {
  pathImages: "public/images/",
  allowedExtensions: ["jpg", "png"],
  dimensions: {
    fit: "box",
    width: 200,
    height: 100
  }
}

const randomImage = () => {

  const getImages = readdirSync(`${definitions.pathImages}`).filter((name) => name.indexOf('.jpg') !== -1 || name.indexOf('.png'));

  return definitions.pathImages + getImages[Math.floor(Math.random() * getImages.length)];

};

asciify(randomImage(), definitions.dimensions, (error, asciified) => {

  if (error) {
    throw error;
  }

  console.log(asciified);

});