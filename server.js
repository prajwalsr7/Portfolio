const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost', // Use your MySQL server's host
    user: 'root',      // Replace with your MySQL username
    password: 'Moto2820!?', // Replace with your MySQL password
    database: 'portfolio' // The database you created
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database.');
    }
});

// API Endpoint: Fetch All Projects
app.get('/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Start the Server
app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
});
