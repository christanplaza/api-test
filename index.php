<?php

// Retrieve the raw HTTP request body
$requestBody = file_get_contents('php://input');

// Parse the JSON request body into an object
$requestData = json_decode($requestBody);

// Set the response Content-Type header to application/json
header('Content-Type: application/json');

// Output the JSON response
echo $requestBody;
