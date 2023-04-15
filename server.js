const express = require('express');
const bodyParser = require('body-parser');

// Create a new Express app
const app = express();

// Use the body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Define a route that accepts HTTP POST requests
app.post('/api/endpoint', (req, res) => {
    // Extract the data from the HTTP request body
    const data = req.body;

    // Log the received data to the console
    console.log(data);

    // Send the response object as JSON
    res.json(data);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
