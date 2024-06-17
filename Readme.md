# DocMkononi

DocMkononi is a comprehensive health tracking platform that allows users to monitor their physical activity, track heart rate, log meals, and manage medication reminders. 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Overview

DocMkononi aims to help users navigate their health journey with confidence by providing accurate data and personalized goals.

## Features

- Monitor physical activity
- Track heart rate
- Manage medication reminders
- Log meals

## Installation

### Prerequisites
- Node.js
- MySQL

### Backend Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up MySQL database:
    - Create a database named `docmkononi`.
    - Create a table named `users`:
        ```sql
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );
        ```

4. Configure database connection in `server.js`:
    ```javascript
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'your_mysql_username',
        password: 'your_mysql_password',
        database: 'docmkononi'
    });
    ```

5. Start the server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Open `index.html` in your browser:
    ```
    http://127.0.0.1:5500/index.html
    ```

## Usage

1. Navigate to the registration form.
2. Fill in the details and submit to register a new user.
3. Monitor the console and server logs for any errors.

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- Express
- MySQL
- bcrypt for password hashing

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
