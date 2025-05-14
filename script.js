// script.js
document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;

  // Mock search result
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <h2>Available Buses from ${from} to ${to} on ${date}:</h2>
    <ul>
      <li>KSRTC Express - 10:00 AM</li>
      <li>KSRTC Deluxe - 2:00 PM</li>
      <li>KSRTC Sleeper - 9:00 PM</li>
    </ul>
  `;
});
