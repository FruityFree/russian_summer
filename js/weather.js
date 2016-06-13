var getTemperature;
(function(){
  var params = "id=524901&APPID=a5e0359a070aa75aefc80a25b091222e&units=metric&cnt=1";
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?"+params;
  getTemperature = function(callback){
    $.get(url, function(data){
      var temps = data.list[0].temp
      var averageTemp = Math.round((temps.min+temps.max)/2);
      callback(averageTemp);
    });
  }
})();
