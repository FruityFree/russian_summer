var launchAnimation;
var changePerson;




(function(){
  var intervalCount;
  // var intervalId;
  // var outfitOverallCount = 4;
  // launchAnimation = launchAnimation;

  //Data vars. Defined in the end;
  var remarks;
  var setup;
  var people;


  var basicTimeout = 240;
  var changesOverallNum = 5;
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
      setTimeout(wearWarmItems, basicTimeout);
      setTimeout(showSigns, 800);
    } else {
      setTimeout(changeOutfit, interval(intervalCount));
    }

    changeItems();
  }

  function changeItems(){
    changeItem("shoes", setup.m.quantity.shoes);
    changeItem("bottom", setup.m.quantity.bottom);
    changeItem("top", setup.m.quantity.top);
  }
  function wearWarmItems(){
    changeItem("shoes", setup.m.warmQuantity.shoes);
    changeItem("bottom", setup.m.warmQuantity.bottom);
    changeItem("top", setup.m.warmQuantity.top);
  }
  function changeItem(name, max){
    var num = Math.ceil(max*Math.random())
    $("#"+name+"-img").attr("src", "/img/"+name+"/m/"+num+".png");
  }


  function showSigns(){
    showPrediction();
    $("#change-person").show();
    startTheRain();
  }

  function reset(){
    intervalCount = 0;
    $("#prediction").hide();
    $("#change-person").hide();
    $(".outfit").hide();
    stopTheRain();
  }

  changePerson = function(){
    currentPerson = people[Math.floor(people.length*Math.random())]


    reset();
  }

  //TODO remove on production
  //launchAnimation();

  function Person(sex, url){
    this.sex = sex;
    this.url = url;
    // this.buttonUrl = buttonUrl;
  }

  function showPrediction(){
    $("#prediction").show();
    var remarkId = Math.floor(remarks.length * Math.random());
    $("#prediction #remark").text(remarks[remarkId]);
  }



  //data
  remarks = [
    "Шапку не забудь!",
    "Оставайся дома.",
    "Не в этот раз.",
    "Ты серьезно?",
    "Точно надо?",
    "А давай в другое лето?",
    "Может, лучше чаю?"
  ];

  setup = {
    m: {
      quantity:{
        shoes: 11,
        bottom: 15,
        top: 22
      },
      warmQuantity:{
        shoes: 3,
        bottom: 4,
        top: 8
      }
    }
  }

  people = [
    new Person("m", "boy1.png"),
    new Person("m", "boy2.png"),
    new Person("m", "boy3.png"),
    new Person("f", "girl1.png"),
    new Person("f", "girl2.png"),
    new Person("f", "girl3.png")
  ]
  console.log(people);
})()
