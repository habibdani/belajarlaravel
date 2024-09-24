document.addEventListener('DOMContentLoaded', function () { //
  function updateTime() { // updatetime bebas
    const currentTime = new Date();
    document.getElementById('current-time').textContent = currentTime.toLocaleString();
  }

  updateTime();
  setInterval(updateTime, 1000); // Update time every second

  // Handle form submit
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! Thank you for contacting us.');
  });
});

yasin kontol