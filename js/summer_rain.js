var startTheRain;
var stopTheRain;

(function(){
  startTheRain = function(){
    if (drops.length > 0){
      showTheDrops();
    } else {
      drawDrops();
    }
    // window.addEventListener("DOMContentLoaded",drawDrops, false);
    // window.addEventListener("resize", setResetFlag, false);
    window.addEventListener("resize", resetDimensions, false);
  }

  stopTheRain = function(){
    for (var i = 0; i < drops.length; i++){
      drops[i].element.style.display = "none";
    }
  }

  function showTheDrops(){
    for (var i = 0; i < drops.length; i++){
      hiddenDrops.push(drops[i]);
    }
  }
  var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

  var dropNum = 200;
  var browserWidth;
  var browserHeight;

  var drops = [];
  var hiddenDrops = [];


  function Drop(element){
    this.element = element;
    this.xPos = getPosition(150, browserWidth);
    this.yPos = getPosition(150, browserHeight);
    this.speedX = -1.5 - Math.random();
    this.speedY = 4 + Math.random();
    this.rotation = -25 + 10*Math.random();

    this.element.style.opacity = .2 + 0.8*Math.random();
    this.element.height = 20 + 5*Math.random();
  }

  Drop.prototype.update = function(){
    this.xPos += this.speedX;
    this.yPos += this.speedY;
    if (this.yPos > browserHeight)
      this.yPos = -50;
    if (this.xPos < -150)
      this.xPos += browserWidth+200;
    var newX = Math.round(this.xPos);
    var newY = Math.round(this.yPos);
    var rotation = Math.round(this.rotation);
    setTranslate3DTransform(this.element, newX, newY, rotation);
  }

  function resetDimensions(){
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;
  }

  function drawDrops(){
    resetDimensions();

    var originalDrop = document.querySelector(".raindrop");
    var dropContainer = originalDrop.parentNode;
    // originalDrop.style.display = "block";
    originalDrop.style.display = "none";
    for (var i = 0; i < dropNum; i++){
      drawDrop(originalDrop, dropContainer);
    }

    moveDrops();
  }

  function moveDrops(){
    for (var i = 0; i < dropNum; i++){
      drops[i].update();
    }
    if (hiddenDrops.length > 0){
      var unhiddenDrop = hiddenDrops.pop();
      unhiddenDrop.element.style.display = "block";
    }
    requestAnimationFrame(moveDrops);
  }

  function drawDrop(originalDrop, dropContainer){
    var clonnedDrop = originalDrop.cloneNode(true);
    dropContainer.appendChild(clonnedDrop);

    var dropObject = new Drop(clonnedDrop);
    drops.push(dropObject);
    hiddenDrops.push(dropObject);
  }



  function getPosition(offset, size) {
    return Math.round(-1*offset + Math.random() * (size+2*offset));
  }


  function setTranslate3DTransform(element, xPosition, yPosition, rotation) {
    var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)" +
      " rotate("+rotation+"deg)";
    element.style[transformProperty] = val;
  }

  var transforms = ["transform",
                  "msTransform",
                  "webkitTransform",
                  "mozTransform",
                  "oTransform"];

  var transformProperty = getSupportedPropertyName(transforms);
  function getSupportedPropertyName(properties) {
      for (var i = 0; i < properties.length; i++) {
          if (typeof document.body.style[properties[i]] != "undefined") {
              return properties[i];
          }
      }
      return null;
  }

})();
