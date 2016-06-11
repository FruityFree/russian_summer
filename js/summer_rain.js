var startTheRain;

(function(){
  startTheRain = function(){
    buildCanvas();
  }

  function buildCanvas(){
    var mainCanvas = document.querySelector("#rain");
    var mainContext = mainCanvas.getContext("2d");

    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;

    var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

    var angle = 0;

    function drawCircle() {
      mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

         // color in the background
         mainContext.fillStyle = "#EEEEEE";
         mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

         // draw the circle
         mainContext.beginPath();

         var radius = 175;
         var radius = 25 + 150 * Math.abs(Math.cos(angle));
         mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
         mainContext.closePath();

         // color in the circle
         mainContext.fillStyle = "#006699";
         mainContext.fill();
         angle += Math.PI / 164;

         requestAnimationFrame(drawCircle);
    }
    drawCircle();
  }

})();
