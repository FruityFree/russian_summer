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
  var browserWidth;
  var browserHeight;

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


  function drawDrops(){
    browserWidth = document.documentElement.clientWidth;
    browserHeight = document.documentElement.clientHeight;

    var originalDrop = document.querySelector(".raindrop");
    var dropContainer = originalDrop.parentNode;

    for (var i = 0; i < dropNum; i++){
      var clonnedDrop = originalDrop.cloneNode(true);
      dropContainer.appendChild(clonnedDrop);

      var dropObject = new Drop(clonnedDrop, 2, getStartX(), getStartY());
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



  function getStartX(){
    return getPosition(50, browserWidth);
  }

  function getStartY(){
    return getPosition(50, browserHeight);
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
