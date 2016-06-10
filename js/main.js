function launchAnimation(){
  var outfitNum = Math.ceil(5*Math.random());
  var src = "/img/outfits/"+outfitNum+".png";
  console.log(src);
  $("#outfit").show();
  $("#outfit-img").attr("src", src);
}

launchAnimation();
