# Contact Management Application

A full-stack web application for managing contacts with a modern, responsive UI and a robust backend API. Built with React, Express.js, and MongoDB.

## 📋 Table of Contents

- [Live Demo](#live-demo)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)

## 🌐 Live Demo

Experience the application live at:

- **Frontend:** [https://contact-management-pjvoy07n1-csv1702s-projects.vercel.app/](https://contact-management-pjvoy07n1-csv1702s-projects.vercel.app/)
- **Backend API:** [https://contact-management-backend-u5zw.onrender.com](https://contact-management-backend-u5zw.onrender.com)

## 📱 Overview

Contact Management Application is a modern web application that allows users to create, view, and delete contacts. The application features a clean, intuitive interface built with React and Tailwind CSS on the frontend, with a powerful Express.js backend connected to MongoDB for data persistence.

## ✨ Features

- **Create Contacts**: Add new contacts with name, email, phone, and optional message
- **View All Contacts**: Display all saved contacts in a responsive list format
- **Delete Contacts**: Remove unwanted contacts from the database
- **Real-time Updates**: Automatic UI refresh after contact operations
- **Input Validation**: Server-side validation for required fields

## 🛠️ Tech Stack

### Frontend

- **React** (v19.2.0) - UI library
- **Vite** (v7.2.4) - Build tool and dev server
- **Axios** (v1.13.2) - HTTP client for API calls
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** (v5.2.1) - Web framework
- **Mongoose** (v9.1.1) - MongoDB ODM
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **dotenv** (v17.2.3) - Environment variable management

### Database

- **MongoDB** - NoSQL database

## 📁 Project Structure

```
contact-management-app/
│
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx     # Form to add new contacts
│   │   │   └── ContactList.jsx     # Display all contacts
│   │   ├── App.jsx                 # Main application component
│   │   ├── index.css               # Global styles
│   │   └── main.jsx                # Entry point
│   ├── public/                      # Static assets
│   ├── .env                         # Client environment variables
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   └── README.md                   # Frontend documentation
│
├── server/                          # Express backend
│   ├── models/
│   │   └── Contact.js              # Contact data model
│   ├── routes/
│   │   └── contactRoutes.js        # API routes
│   ├── .env                         # Server environment variables
│   ├── server.js                    # Server entry point
│   └── package.json                # Backend dependencies
│
├── .gitignore                       # Git ignore rules
└── README.md
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 - v20.x.x) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - comes with Node.js
- **MongoDB** - Cloud or Local instance
  - For cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - For local: [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- **Git** (optional) - for cloning the repository

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd contact-management-app
```

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Backend Configuration

1. **Create `.env` file in the `server` directory:**

2. **Add the following environment variables:**

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/?appName=Cluster0
```

#### How to get MongoDB URI:

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up database credentials
4. Copy the connection string (URI)
5. Replace `<username>`, `<password>`, and `<cluster-url>` with your actual credentials

### Frontend Configuration

1. **Create `.env` file in the `client` directory:**

2. **Add the following environment variable:**

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

**Note:** By default, the frontend will connect to `http://localhost:5000`. You can adjust the port if your backend runs on a different port.

## ▶️ Running the Application

### Start the Backend Server

```bash
cd server
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on `http://localhost:5000`

You should see:

```
MongoDB connected successfully ✅
Server running on http://localhost:5000
```

### Start the Frontend Development Server

In a new terminal:

```bash
cd client
npm run dev
```

The frontend will typically run on `http://localhost:5173`

Visit the application in your browser to start managing contacts!

## 📡 API Endpoints

### Base URL

```
http://localhost:5000/api
```

### 1. Create a New Contact

- **Endpoint:** `POST /contacts`
- **Description:** Save a new contact to the database
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Optional message"
}
```

- **Response (Success - 201):**

```json
{
  "message": "Contact saved successfully",
  "contact": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "Optional message",
    "createdAt": "2024-01-03T10:30:00.000Z",
    "updatedAt": "2024-01-03T10:30:00.000Z"
  }
}
```

- **Response (Error - 400):**

```json
{
  "message": "Name, Email, and Phone are required"
}
```

### 2. Get All Contacts

- **Endpoint:** `GET /contacts`
- **Description:** Retrieve all saved contacts (sorted by newest first)
- **Response (Success - 200):**

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "Optional message",
    "createdAt": "2024-01-03T10:30:00.000Z",
    "updatedAt": "2024-01-03T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+0987654321",
    "message": "",
    "createdAt": "2024-01-02T15:45:00.000Z",
    "updatedAt": "2024-01-02T15:45:00.000Z"
  }
]
```

### 3. Delete a Contact

- **Endpoint:** `DELETE /contacts/:id`
- **Description:** Delete a specific contact by ID
- **URL Parameters:**
  - `id` - MongoDB ObjectId of the contact
- **Response (Success - 200):**

```json
{
  "message": "Contact deleted successfully"
}
```

- **Response (Error - 404):**

```json
{
  "message": "Contact not found"
}
```

## 🗄️ Database Schema

### Contact Model

**Collection Name:** `contacts`

**Schema:**

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    default: "",
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

**Index:** Automatically sorted by `createdAt` in descending order (newest first)

## 📧 Contact & Support

For questions or support, please open an issue on the repository.

Developed By-
**Chandra Shekhar Verma**

---

**Happy Contact Managing! 🎉**
