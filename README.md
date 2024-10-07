# Bike Information API

This is a RESTful API for managing bike information. The API allows users to add, update, delete, and retrieve bike data, including filtering by category.

## Features
- Add new bike information
- Update existing bike information
- Delete bike information
- Retrieve all bikes
- Filter bikes by category

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JavaScript (ES6+)
- Async/Await for asynchronous operations

## Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/karanntech/BikeInfo
   
2. Install Dependencies:
   
   ```bash
     npm install
   
3. Set up your environment variables. Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
     MONGODB_URI=your_mongodb_connection_string

4. Start the server:
   ```bash
     npm start

# API Endpoints

## Add a Bike

- POST /bikes

- Description: Adds a new bike.

## Update a Bike

- PUT /update/:id

- Description: Updates an existing bike by ID.

## Delete a Bike

- DELETE /delete/:id

- Description: Deletes a bike by ID.

## Get All Bikes

- GET /getall

- Description: Retrieves all bikes.

## Get Bikes by Category

- GET /bikes/:category

- Description: Retrieves bikes filtered by category.

# Usage

Use tools like Postman or curl to test the API endpoints. Ensure your server is running and that you have a valid MongoDB connection.
