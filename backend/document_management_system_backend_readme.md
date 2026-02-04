# 📁 Document Management System (DMS) – Backend

A backend implementation of a **Document Management System** inspired by real-world platforms like **Google Drive** and **SharePoint**. This project was developed as part of an assignment and demonstrates production-ready backend design using the **MEAN stack (MongoDB, Express.js, Node.js)**.

---



### Core Functionalities
- **User Authentication & Authorization**
  - User registration & login
  - Password hashing using `bcrypt`
  - JWT-based authentication
  - Protected routes using middleware

- **Document Upload & Management**
  - Upload documents (PDFs, images, etc.) using `multer`
  - Store file metadata in MongoDB
  - Automatic file naming to avoid conflicts

- **Tagging & Categorization**
  - Add tags to documents
  - Tags stored as arrays for efficient querying

- **Search & Filter**
  - Search documents by title (case-insensitive)
  - Search documents by tags

- **User Permissions**
  - Role-based access control
  - Assign users as `viewer` or `editor`
  - Only document owner can update permissions

- **Version Control**
  - Upload new versions of existing documents
  - Maintain version history in MongoDB
  - Only owner or editors can upload new versions

---

## Backend Architecture

```
backend/
├── controllers/
│   ├── authController.js
│   └── documentController.js
├── routes/
│   ├── authRoutes.js
│   └── documentRoutes.js
├── models/
│   ├── User.js
│   └── Document.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── multer.js
├── uploads/
├── .env
├── package.json
└── server.js
```

---

## Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication
- **bcrypt** – Password hashing
- **Multer** – File uploads

---

## Setup Instructions (Local)

### 1️. Prerequisites
- Node.js (v20.x recommended)
- MongoDB (Community Server or MongoDB Atlas)
- npm

---

### 2️. Clone the Repository
```bash
git clone <repository-url>
cd Document-Management-System/backend
```

---

### 3️. Install Dependencies
```bash
npm install
```

---

### 4️. Environment Variables
Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dms
JWT_SECRET=supersecretkey
```

---

### 5️. Start the Server
```bash
npx nodemon server.js
```

Server will run at:
```
http://localhost:5000
```

---

##  API Endpoints

###  Authentication
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

###  Documents
| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/api/documents/upload` | Upload document |
| GET | `/api/documents` | Get user documents |
| GET | `/api/documents/search?q=` | Search documents |
| PUT | `/api/documents/permissions` | Update permissions |
| POST | `/api/documents/version` | Upload new version |

>  All document routes are **protected** and require Bearer Token authentication.

---

## Testing

- APIs tested using **Postman**
- MongoDB data verified using **MongoDB Compass**

Screenshots included in submission:
- User registration & login
- Document upload
- Search results
- Permissions update
- Version upload

---

##  Real-World Relevance

This backend mirrors real-world document platforms by supporting:
- Secure access
- Role-based permissions
- Version tracking
- Scalable architecture

---