// Fetch data from the backend
const backendUrl = process.env.BACKEND_URL || 'http://backend:5000'; // Fallback for local testing
fetch(`${backendUrl}/api/message`)
  .then(response => response.json())
  .then(data => {
    document.getElementById('backend-response').textContent = data.message;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    document.getElementById('backend-response').textContent = 'Failed to load message';
  });