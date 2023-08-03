// index.js

const express = require('express');
const app = express();
const port = 3000; // You can change this to any port number you prefer.
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// CORS Middleware
// ... (same as before)

// Sample data for radio streams
// ... (same as before)

// API endpoint to get available radio streams
// ... (same as before)

// Serve the Swagger UI at the root URL
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Sample data for radio streams
const radioStreams = [
  { id: 1, name: 'Radio Channel 1', url: 'http://stream.url/radio1' },
  { id: 2, name: 'Radio Channel 2', url: 'http://stream.url/radio2' },
  // Add more radio streams here...
];

// API endpoint to get available radio streams
app.get('/api/radio-streams', (req, res) => {
  res.json(radioStreams);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
