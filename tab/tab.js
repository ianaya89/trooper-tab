window.onload = function () {
  var hoursContainer = document.getElementById('head-3LC'),
  minutesContainer = document.getElementById('head-3RC'),
  date = new Date(),
  hours = 0,
  show = false,
  minutes = 0,
  seconds = 0;

  setInterval(function() {
    date = new Date();
    seconds = date.getSeconds() <= 9 ? '0' + date.getSeconds().toString() : date.getSeconds();
    minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes().toString() : date.getMinutes();
    hours = date.getHours() <= 9 ? '0' + date.getHours().toString() : date.getHours();

    hoursContainer.innerHTML = hours + ':';
    minutesContainer.innerHTML = minutes;

    if (!show){
      hoursContainer.style.display = 'inline';
      minutesContainer.style.display = 'inline';
      show = true;
    }

  }, 1000);
};