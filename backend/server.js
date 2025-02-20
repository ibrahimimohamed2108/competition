const express = require('express');
const app = express();
const port = 5000;

// Endpoint to send a message
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});