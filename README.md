# 101464867 - COMP3133 Assignment 2

## Employee Management System - Full Stack Application

A full-stack employee management application built with **Angular** (frontend) and **Node.js/Express/GraphQL/MongoDB** (backend).

**Student:** Lakshay  
**Student ID:** 101464867  
**Course:** COMP 3133 - Full Stack Development II  
**College:** George Brown College

---

## Tech Stack

### Frontend
- Angular 19
- Angular Material (UI components)
- Bootstrap 5 (Grid/layout)
- Apollo Angular (GraphQL client)
- TypeScript

### Backend
- Node.js + Express
- Apollo Server (GraphQL)
- MongoDB + Mongoose
- JSON Web Tokens (JWT) for authentication
- Multer (file uploads)
- bcryptjs (password hashing)

---

## Features

- **User Authentication**: Login and Signup with JWT-based session management
- **Employee CRUD**: Create, Read, Update, and Delete employees
- **Photo Upload**: Upload employee profile pictures
- **Search**: Search employees by department or designation/position
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Form Validation**: Comprehensive validation on all forms with error messages
- **Route Protection**: Auth guards to protect employee routes

---

## Project Structure

```
101464867_comp3133_assig2/
├── backend/
│   ├── src/
│   │   ├── config/db.js           # MongoDB connection
│   │   ├── graphql/
│   │   │   ├── schema.js          # GraphQL type definitions
│   │   │   └── resolvers.js       # GraphQL resolvers
│   │   ├── models/
│   │   │   ├── User.js            # User Mongoose model
│   │   │   └── Employee.js        # Employee Mongoose model
│   │   └── index.js               # Express server entry point
│   ├── uploads/                    # Uploaded photos
│   ├── package.json
│   └── .env                        # Environment variables
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── login/          # Login component
│   │   │   │   ├── signup/         # Signup component
│   │   │   │   ├── employee-list/  # Employee list with search
│   │   │   │   ├── add-employee/   # Add employee form
│   │   │   │   ├── view-employee/  # View employee details
│   │   │   │   ├── edit-employee/  # Edit employee form
│   │   │   │   ├── navbar/         # Navigation bar
│   │   │   │   └── confirm-dialog/ # Delete confirmation dialog
│   │   │   ├── services/           # Auth & Employee services
│   │   │   ├── guards/             # Auth route guard
│   │   │   ├── models/             # TypeScript interfaces
│   │   │   └── graphql/            # GraphQL queries & mutations
│   │   └── environments/           # Environment configs
│   ├── angular.json
│   ├── vercel.json                 # Vercel deployment config
│   └── package.json
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account (or local MongoDB)
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/comp3133_assig2
JWT_SECRET=your_secret_key
PORT=5000
```

Start the backend:
```bash
npm start
```

The GraphQL playground will be available at `http://localhost:5000/graphql`

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

The app will be available at `http://localhost:4200`

---

## GraphQL API

### Queries
- `login(username, password)` - Authenticate user
- `getAllEmployees` - Get all employees
- `getEmployeeById(id)` - Get single employee
- `searchEmployees(department, designation)` - Search employees

### Mutations
- `signup(username, email, password)` - Register new user
- `addEmployee(...)` - Create new employee
- `updateEmployee(id, ...)` - Update employee
- `deleteEmployee(id)` - Delete employee

### REST Endpoint
- `POST /upload` - Upload employee profile photo

---

## Deployment

- **Backend**: Deployed on Render
- **Frontend**: Deployed on Vercel

---

## Screenshots

Screenshots of all CRUD operations, search functionality, and MongoDB data are included in the submission document.
