var startTheRain;

(function(){
  startTheRain = function(){
    window.addEventListener("DOMContentLoaded",drawDrops, false);
    // window.addEventListener("resize", setResetFlag, false);
  }
  function setup() {

  }
  setup();
  var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

  var dropNum = 100;
  var browserWidth;
  var browserHeight;

  var drops = []

  function Drop(element){
    this.element = element;
    this.xPos = getStartX();
    this.yPos = getStartY();
    this.speedX = getStartSpeedX();
    this.speedY = getStartSpeedY();
  }

  Drop.prototype.update = function(){
    this.xPos += this.speedX;
    this.yPos += this.speedY;
    setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
  }


  function drawDrops(){
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    var originalDrop = document.querySelector(".raindrop");
    var dropContainer = originalDrop.parentNode;

    for (var i = 0; i < dropNum; i++){
      drawDrop(originalDrop, dropContainer);
    }
    moveDrops();
  }

  function moveDrops(){
    for (var i = 0; i < dropNum; i++){
      drops[i].update();
    }
    requestAnimationFrame(moveDrops);
  }

  function drawDrop(originalDrop, dropContainer){
    var clonnedDrop = originalDrop.cloneNode(true);
    dropContainer.appendChild(clonnedDrop);

    var dropObject = new Drop(clonnedDrop);
    drops.push(dropObject);
  }



  function getStartX(){
    return getPosition(50, browserWidth);
  }

  function getStartY(){
    return getPosition(50, browserHeight);
  }

  function getStartSpeedX(){
    return -2;
  }

  function getStartSpeedY(){
    return 6;
  }

  function getPosition(offset, size) {
    return Math.round(-1*offset + Math.random() * (size+2*offset));
  }


  function setTranslate3DTransform(element, xPosition, yPosition) {
    var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
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
