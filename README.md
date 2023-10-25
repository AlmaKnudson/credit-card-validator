# Credit Card Validator - Frontend

## Introduction

Welcome to the frontend of the Credit Card Validator application. This README will guide you on how to set up, run, and test both the frontend and the backend of our application.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Navigate to the `credit-card-validator/frontend` directory:

   ```bash
   cd credit-card-validator/frontend
   ```

2. Install the necessary dependencies:
```bash 
npm install
```

### Running the Frontend
To start the React app:
```bash
npm run start
```
Once started, the application will be available at http://localhost:3000.

### Testing the Frontend
To run tests for the frontend:
```bash
npm run test
```

## Backend
### Running the Backend
The frontend communicates with a backend service. Before using the frontend, ensure the backend is running.

1. Navigate to the root directory credit-card-validator:
```bash
cd ..
```
2. Run the backend in watch mode:
```bash
npm run dev:watch
```

Once started, the backend server will be available at http://localhost:4000. The backend also serves the Swagger documentation at http://localhost:4000/docs/.

### Testing the Backend
To run the backend tests:
```bash
npm run test
```

> Thank you for using the Credit Card Validator. If you have any issues, questions, or feedback, please feel free to open an issue or contact the maintainers.