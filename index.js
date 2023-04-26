const webshot = require("node-webshot");
const fs = require("fs");

// Set up options for node-webshot
const options = {
  siteType: "html",
  quality: 100,
  windowSize: {
    width: 1024,
    height: 768,
  },
};

// Use node-webshot to capture an image of a webpage
webshot(
  `<div style="color:white"><h1>Hello, World!</h1></div>`,
  "hello-world.png",
  options,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Image saved to hello-world.png");
    }
  }
);
