var intervalCount;
var intervalId;
var lastOutfitNum;
var intervalsMx = [2,1.9,1.75, 1.65, 1.6, 1.55, 1.5, 1.45, 1.4, 1.3, 1.2, 1.1, 1,1,1,1,1,1,1,1,1.2, 1.3, 1.4, 1.5, 1.8, 2]
var basicTimeout = 120;

function launchAnimation(){
  intervalCount = 0;
  $("#outfit").show();
  intervalId = setInterval(changeOutfit, interval(intervalCount));
  changeOutfit();
}

function interval(count){
  return intervalsMx[count]*basicTimeout;
}

function changeOutfit(){
  intervalCount += 1;
  if (intervalCount > 20){
    clearInterval(intervalId);
  }
  console.log(intervalCount);
  var outfitNum = Math.ceil(5*Math.random());
  var src = "/img/outfits/"+outfitNum+".png";
  $("#outfit-img").attr("src", src);
}

launchAnimation();
