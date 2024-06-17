const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#slyAyoo123',
    database: 'docmkononi'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Route to handle user registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ success: false, message: 'Server error' });
        }

        // Insert new user with hashed password
        db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ success: false, message: 'Server error' });
            }
            res.status(201).json({ success: true, message: 'User registered successfully' });
        });
    });
});

// Route to handle contact form submission
app.post('/contact', (req, res) => {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all fields' });
    }

    // Insert contact message into the database
    db.query('INSERT INTO contacts (name, phone, email, subject, message) VALUES (?, ?, ?, ?, ?)', [name, phone, email, subject, message], (err, results) => {
        if (err) {
            console.error('Error inserting contact message:', err);
            return res.status(500).json({ success: false, message: 'Server error' });
        }
        res.status(201).json({ success: true, message: 'Message sent successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
