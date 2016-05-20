$.get("http://ipinfo.io", function(response) {
  $("#location").html(response.city);
}, "jsonp");

var weatherUrl;

$.get('http://ipinfo.io', function(response) {

      weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + response.city + "&units=metric&APPID=f962dceecbf8f2c3a14c48c7aeb9af10";
      $.getJSON(weatherUrl, function(json) {
            $("#temp").html(json.main.temp_min + '&#176' + 'C');

            $.ajax(weatherURL,
                   data:{},
                   dataType:'json',
                   method:'GET'
                   success: function(data){
                   function getIcon() { 
                switch (status) {
                  case 'Wind':
                    $('#icon').append('<i class="wi wi-cloudy-windy"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/clear.jpg')
                    break;
                  case 'Cloud':
                    $('#icon').append('<i class="wi wi-cloudy"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/cloud.jpg')
                    break;
                  case 'Rain':
                    $('#icon').append('<i class="wi wi-rain-mix"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/rain.jpg')
                    break;
                  case 'Snow':
                    $('#icon').append('<i class="wi wi-snow"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/snow.jpg')
                    break;
                  case 'Fog':
                    $('#icon').append('<i class="wi wi-fog"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/fog.jpg')
                    break;
                  case 'Haze':
                    $('#icon').append('<i class="wi wi-rain-mix"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/haze.jpg')
                    break;
                  case 'Drizzle':
                    $('#icon').append('<i class="wi wi-sprinkle"></i>');
                    $('body').css('background-image', 'weather_forecast_slick/asset/img/drizzle.jpg')

                }
              }
            }

                   