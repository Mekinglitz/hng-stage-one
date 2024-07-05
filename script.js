document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(' ')[4];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[now.getUTCDay()];
  
      document.getElementById('time-utc').textContent = utcTime;
      document.getElementById('day').textContent = day;
    }
  
    updateTime();
    setInterval(updateTime, 1000);  // Update the time every second
  });