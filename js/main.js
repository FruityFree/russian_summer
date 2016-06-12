var launchAnimation;
var changePerson;




(function(){
  var intervalCount;
  var intervalId;
  var outfitOverallCount = 4;
  var isCyclist = true;
  // launchAnimation = launchAnimation;


  var basicTimeout = 240;
  var changesOverallNum = 3;
  // var changesOverallNum = 20;
  // var intervalsMx = [2.5,2.2, 2, 1.9, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1,
  //   1.1,1, 1,1,1,1.2,1.5,1.7,2,3,4]


  launchAnimation = function(){
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

    if (intervalCount > changesOverallNum){
      setTimeout(showSigns, 800);
    } else {
      setTimeout(changeOutfit, interval(intervalCount));
    }

    changeItems();
  }

  function changeItems(){
    changeItem("shoes");
    changeItem("bottom");
    changeItem("top");

  }
  function changeItem(name){
    var num = Math.ceil(outfitOverallCount*Math.random())
    $("#"+name+"-img").attr("src", "/img/"+name+"/m/"+num+".png");
  }


  function showSigns(){
    showPrediction();
    $("#change-cyclist").show();
    startTheRain();
  }

  function reset(){
    intervalCount = 0;
    $("#weather").hide();
    $("#change-cyclist").hide();
    $(".outfit").hide();
    stopTheRain();
  }

  changePerson = function(){
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

  function Person(){
    this.sex = sex;
    this.buttonUrl = buttonUrl;
  }

  function showPrediction(){
    $("weather").text("Yo!");
    $("#weather").show();
  }
})()
