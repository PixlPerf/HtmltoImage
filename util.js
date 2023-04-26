var px = function (node, styleProperty) {
  if (!node) {
    return 0;
  }

  var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
  return parseFloat(value.replace("px", ""));
};

var getNodeWidth = function (node) {
  if (!node) {
    return 0;
  }

  var leftPadding = px(node, "padding-left");
  var rightPadding = px(node, "padding-right");
  var leftBorder = px(node, "border-left-width");
  var rightBorder = px(node, "border-right-width");
  var width = node.offsetWidth;

  return width - leftPadding - rightPadding - leftBorder - rightBorder;
};

var getImageSize = function (node) {
  if (!node) {
    return {
      width: 0,
      height: 0,
    };
  }

  var width = getNodeWidth(node);
  var height = node.offsetHeight;

  return {
    width: width,
    height: height,
  };
};

module.exports = {
  getNodeWidth: getNodeWidth,
  getImageSize: getImageSize,
};
