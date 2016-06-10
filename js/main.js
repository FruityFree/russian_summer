var intervalCount;
var intervalId;
var lastOutfitNum;

function launchAnimation(){
  intervalCount = 0;
  $("#outfit").show();
  intervalId = setInterval(changeOutfit, 150);
  changeOutfit();

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
