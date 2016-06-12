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
  var currentPerson;
  var buttons;


  var basicTimeout = 180;
  var changesOverallNum = 12;
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
    changeItem("shoes", setup[currentPerson.sex].quantity.shoes);
    changeItem("bottom", setup[currentPerson.sex].quantity.bottom);
    changeItem("top", setup[currentPerson.sex].quantity.top);
  }
  function wearWarmItems(){
    changeItem("shoes", setup[currentPerson.sex].warmQuantity.shoes);
    changeItem("bottom", setup[currentPerson.sex].warmQuantity.bottom);
    changeItem("top", setup[currentPerson.sex].warmQuantity.top);
  }
  function changeItem(name, max){
    var num = Math.ceil(max*Math.random())
    var src = "/img/"+name+"/"+currentPerson.sex+"/"+num+".png";
    $("#"+name+"-img").attr("src", src);
  }


  function showSigns(){
    showPrediction();
    // $("#change-person").show();
    startTheRain();
  }

  function reset(){
    intervalCount = 0;
    $("#prediction").hide();
    // $("#change-person").hide();
    $(".outfit").hide();
    stopTheRain();
  }

  changePerson = function(){
    var newPerson = currentPerson;
    while (newPerson==currentPerson){
      newPerson = people[Math.floor(people.length*Math.random())];
    }
    currentPerson = newPerson;
    $("#person").attr("src", "/img/person/" + currentPerson.url)
    changeItems();
    showDuck();
    changeButton(currentPerson.buttonId);
    reset();
  }

  function showDuck(){
    if (currentPerson.hasDuck)
      $("#duck").show();
    else
      $("#duck").hide();
  }

  function changeButton(buttonId){
    var button = $.grep(buttons, function(e){ return e.id == buttonId; })[0];
    $("#main-button").attr("src", button.url);
    $("#active-button").attr("src", button.activeUrl);
    $("#change-person").text(button.caption);
  }




  function showPrediction(){
    $("#prediction").show();
    var remarkId = Math.floor(remarks.length * Math.random());
    $("#prediction #remark").text(remarks[remarkId]);
  }

  //models
  function Person(sex, url, buttonId, hasDuck){
    this.sex = sex;
    this.url = url;
    this.buttonId = buttonId;
    this.hasDuck = hasDuck;
  }

  function Button(id, activity, caption){
    this.id = id;
    this.url = "/img/buttons/button_"+activity+".png";
    this.activeUrl = "/img/buttons/button_"+activity+"_active.png";
    this.caption = caption;
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
    },
    f: {
      quantity:{
        shoes: 13,
        bottom: 12,
        top: 18
      },
      warmQuantity:{
        shoes: 4,
        bottom: 4,
        top: 4
      }
    }
  }

  people = [
    new Person("m", "boy1.png", 1),
    new Person("m", "boy2.png", 3, true),
    new Person("m", "boy3.png", 2),
    new Person("f", "girl1.png", 1),
    new Person("f", "girl2.png", 4),
    new Person("f", "girl3.png", 4)
  ]
  // currentPerson = people[0];

  buttons = [
    new Button(1, "ride", "не хочу кататься"),
    new Button(2, "picnic", "не хочу на пикник"),
    new Button(3, "swim", "не хочу купаться"),
    new Button(4, "walk", "не хочу гулять"),
  ];
  changePerson();
})()
