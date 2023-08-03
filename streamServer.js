// streamServer.js

const express = require('express');
const app = express();
const port = 3001; // You can change this to any port number you prefer.
const faker = require('faker');

// CORS Middleware - You may need this for handling cross-origin requests from your frontend app.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Endpoint to generate a random video stream URL
app.get('/api/stream-url', (req, res) => {
  // Simulate a video stream URL using the faker library
  const streamUrl = faker.image.imageUrl();

  res.json({ url: streamUrl });
});

// Start the server
app.listen(port, () => {
  console.log(`Stream Server is running on http://localhost:${port}`);
});
