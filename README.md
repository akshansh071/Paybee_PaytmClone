# Paybee- Paytm Clone

A simple Paytm-like application built using **Node.js** for the backend and **MongoDB** for storing user accounts and balances. The frontend is developed using **React.js** with authentication and a dashboard to display user balance and other users.

## Features

- User Signup & Signin  
- Secure authentication  
- Dashboard to view balance and users  
- Money transfer functionality  

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB  
- **Frontend:** React.js, Tailwind CSS  
- **Authentication:** JWT  

## Screenshots  

### Signin Page  
![Signin Page](./assets/signin.png)  

## Setup Instructions  

1. Clone the repository:  
   ```bash
   git clonehttps://github.com/Maitrey27/Paybee.git
   ```
2. Install dependencies:  
   ```bash
   cd backend
   npm install
   ```
3. Start the backend server:  
   ```bash
   npm start
   ```
4. Navigate to the frontend folder and install dependencies:  
   ```bash
   cd ../frontend
   npm install
   ```
5. Start the frontend server:  
   ```bash
   npm start
   ```

## API Endpoints  

- **POST /api/v1/auth/signup** – User signup  
- **POST /api/v1/auth/signin** – User login  
- **GET /api/v1/account/balance** – Get user balance  
- **POST /api/v1/account/transfer** – Transfer money  
