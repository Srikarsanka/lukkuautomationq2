# Robot Management REST API

This project is a backend system developed to manage robots.
It allows registering robots, updating their status, retrieving robot details, and storing logs for tracking robot activities or errors.

The API is designed to be simple, scalable, and suitable for production use.

## Features

1. Register a new robot
2. Update robot status (battery, location, mode)
3. Get all robots
4. Get robot by ID
5. Add activity/error logs for a robot
6. Get logs of a robot

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv (for environment variables)
* CORS

## How to Run the Project

### 1. Install dependencies

npm install

### 2. Create .env file in the root directory

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/robotdb or your mongodb atlast url

### 3. Start the server

npm start

If everything is correct, the console should show:

MongoDB connected
Server running on port 5000

## API Endpoints

### Robot APIs

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | /api/robots/register   | Register a robot    |
| GET    | /api/robots            | Get all robots      |
| GET    | /api/robots/:id        | Get robot by ID     |
| PUT    | /api/robots/:id/status | Update robot status |

### Log APIs

| Method | Endpoint      | Description            |
| ------ | ------------- | ---------------------- |
| POST   | /api/logs/:id | Create log for a robot |
| GET    | /api/logs/:id | Get logs for a robot   |

## Sample JSON for Robot Registration

{
  "id": "RBT-001",
  "name": "Warehouse Cleaner",
  "type": "cleaning",
  "status": "online",
  "battery": 90,
  "location": "Zone-A",
  "mode": "idle"
}

## Folder Structure (Simplified)

src/
 ├── config/         -> database connection
 ├── controllers/    -> logic of API
 ├── models/         -> MongoDB schemas
 ├── routes/         -> route endpoints
server.js            -> entry point

---

## Explanation Summary

Robots keep changing their status continuously during operation.
To monitor and manage them centrally, this backend provides a structured way to store robot information and activity logs in a database.
Any frontend dashboard or robot application can use these APIs to display robot status, monitor performance, detect errors, and maintain history.
