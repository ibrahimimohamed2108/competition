// Replace process.env.BACKEND_URL with a direct URL
const backendUrl = 'http://localhost:5000'; // Change this to 'http://backend:5000' in Docker

fetch(`${backendUrl}/api/message`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('backend-response').textContent = data.message;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('backend-response').textContent = 'Failed to load message';
  });
