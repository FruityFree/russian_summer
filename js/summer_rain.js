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

  var dropNum = 10;
  var browserWidth = 400;
  var browserHeight = 400;

  var drops = []

  function Drop(element, speed, xPos, yPos){
    this.element = element;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
  }

  Drop.prototype.update = function(){
    setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
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

  function drawDrops(){
    var originalDrop = document.querySelector(".raindrop");
    var dropContainer = originalDrop.parentNode;
    var clonnedDrop = originalDrop.cloneNode(true);
    dropContainer.appendChild(clonnedDrop);
    for (var i = 0; i < dropNum; i++){
      var dropObject = new Drop(clonnedDrop, 2, 200, 200);
      drops.push(dropObject);
    }
    moveDrops();
  }

  function moveDrops(){
    for (var i = 0; i < dropNum; i++){
      drops[i].update();
    }
  }
  function drawDrop(){
  }

})();
