var intervalCount;
var intervalId;
var outfitOverallCount = 4;
var isCyclist = true;

var basicTimeout = 280;
var changesOverallNum = 20;
// var intervalsMx = [2.5,2.2, 2, 1.9, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1,
//   1.1,1, 1,1,1,1.2,1.5,1.7,2,3,4]


function launchAnimation(){
  reset();
  $(".outfit").show();
  setTimeout(changeOutfit, interval(intervalCount));
  // changeOutfit();
}

function interval(count){
  return basicTimeout;
}

function changeOutfit(){
  intervalCount += 1;
  console.log(intervalCount);
  if (intervalCount > changesOverallNum){
    setTimeout(showSigns, 800);
  } else {
    setTimeout(changeOutfit, interval(intervalCount));
  }

  changeItems();
}

function changeItems(){
  changeItem("boots");
  changeItem("pants");
  changeItem("jacket");

}
function changeItem(name){
  var num = Math.ceil(outfitOverallCount*Math.random())
  $("#"+name+"-img").attr("src", "/img/outfits/"+name+num+".png");
}


function showSigns(){
  $("#weather").show();
  $("#change-cyclist").show();
}

function reset(){
  intervalCount = 0;
  $("#weather").hide();
  $("#change-cyclist").hide();
  $(".outfit").hide();
}

function changeCyclist(){
  if (isCyclist){
    $("#cyclist").attr("src", "/img/pedestrian.png");
    $("#change-cyclist").text("хочу кататься");
    isCyclist = false;
  } else {
    $("#cyclist").attr("src", "/img/cyclist_base.png");
    $("#change-cyclist").text("не хочу кататься");
    isCyclist = true;
  }
  reset();
}

//TODO remove on production
//launchAnimation();
