function startTimer(duration) {
    let timer = duration;
    setInterval(function () {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = timer % 60;
  
      document.getElementById('hours').innerText = formatTime(hours);
      document.getElementById('minutes').innerText = formatTime(minutes);
      document.getElementById('seconds').innerText = formatTime(seconds);
  
      timer--;
      if (timer < 0) {
        timer = duration;
      }
    }, 1000);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  // Set the duration of the timer in seconds (e.g., 1 hour = 3600 seconds)
  const timerDuration = 10800; // Change this value to set the desired duration
  startTimer(timerDuration);
  