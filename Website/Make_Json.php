<?php

// HOW DOES DATA_Base look like :
/*
    DATA=# SELECT * FROM themp;
    value
    -------
    666
        7
        69
        42
        64
    123
    999
    (7 rows
*/



// PostgreSQL database credentials  // Database connection settings
$host = '127';
$port = '5432';
$dbname = 'DATA_Base';
$user = 'postgres';
$password = 'KOBE_THOM_SAMY_CEY';

// Establish a connection to the PostgreSQL database
$connection = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . pg_last_error());
}

// Query to fetch data from the "themp" table
$query = "SELECT * FROM themp"; // SELECT alles met het * teken

// Execute the query
$result = pg_query($connection, $query);

// Fetch all rows from the result set
$rows = pg_fetch_all($result);

// Convert the data to JSON
$jsonData = json_encode($rows, JSON_PRETTY_PRINT);

// Write the JSON data to a file
$file = 'data.json';
file_put_contents($file, $jsonData);

// Close the database connection
pg_close($connection);

echo "JSON file created successfully.";
?>
