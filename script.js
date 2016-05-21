$(document).ready(function() {
  $.ajax({
    url: 'http://ip-api.com/json',
    data: {},
    dataType: 'json',
    Method: 'GET',
    success: function(data) {
      $city = data.city;
      $('#location').html($city)

      setCurrent($city);
      
    },
    error: function(error) {
      console.log(error)
    }
  });
});

function setCurrent(city) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&APPID=f962dceecbf8f2c3a14c48c7aeb9af10',
    data: {},
    dataType: 'json',
    method: 'GET',
    success: function(data) {
      $('#temp').empty();
      measurement = '°C';
      $('#temp').append(data.main.temp + measurement);
      $status = data.weather[0].main;
      $('#icon').empty();
      setIcon($status);
      changeDeg(data.main.temp);
      
    }
  })
}

function setIcon(status) {

  switch (status) {
    case 'Rain':
      $('#icon').html('<i class="wi wi-rain-mix"></i>');
      $('body').css('background-image', 'url("asset/img/drizzle.jpg")');
      break;
    case 'Drizzle':
      $('#icon').html('<i class="wi wi-rain-mix"></i>');
      $('body').css('background-image', 'url("asset/img/drizzle.jpg")');
      break;
    case 'Clear':
      $('#icon').html('<i class="wi wi-day-sunny"></i>');
      $('body').css('background-image', 'url("asset/img/clear.jpg")')
      break;
    case 'Clouds':
      $('#icon').html('<i class="wi wi-cloudy"></i>');
      $('body').css('background-image', 'url("asset/img/cloud.jpg")')
      break;
    case 'Thunderstorm':
      $('#icon').html('<i class="wi wi-storm-showers"></i>');
      $('body').css('background-image', 'url("asset/img/rain.jpg")')
      break;
    case 'Snow':
      $('#icon').html('<i class="wi wi-snow"></i>');
      $('body').css('background-image', 'url("asset/img/snow.jpg")')
      break;
    case 'Mist':
      $('#icon').html('<i class="wi wi-fog"></i>');
      $('body').css('background-image', 'url("asset/img/fog.jpg")')
      break;
    case 'Fog':
      $('#icon').html('<i class="wi wi-fog"></i>');
      $('body').css('background-image', 'url("asset/img/fog.jpg")')
      break;
    case 'Haze':
      $('#icon').html('<i class="wi wi-smoke"></i>');
      $('body').css('background-image', 'url("asset/img/fog.jpg")')
      break;
    default:$('body').html('Something went wrong please go to github')
  }
}

//I tried toggleClass, toggle, even plain vanilla JS
//the only way is to refresh the page which is counter-intuitive to user
//tried switch and ternary expression which bear the same result as below
//major screw ups all over god-damm it F**K this Sh*t

function changeDeg(value) {
  $('#switch').click(function() {
    if ($('#temp').text().indexOf('C') > -1){
  return $('#temp').text(Math.round((value) * 1.8000 + 32.00) + '°F')
    } else {
  return $('#temp').text(Math.round(value) + '°C');
    } 
  })
}