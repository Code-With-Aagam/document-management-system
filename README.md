# Document Management System (DMS)

A full-stack **Document Management System** built using the **MEAN stack (MongoDB, Express, Angular, Node.js)**.  
The system supports authentication, document upload, tagging, version control, and role-based access control, inspired by real-world systems like **Google Drive** and **SharePoint**.

---

##  Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (File Uploads)

### Frontend
- Angular (Standalone Components)
- Angular Router
- Angular Forms
- HttpClient

---

##  Features Implemented

### Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected routes using Auth Guard

###  Document Management
- Upload documents (PDFs, images, etc.)
- Add title and tags
- Store metadata in MongoDB
- Version control (upload new versions of the same document)

###  Permissions
- Role-based permissions (viewer / editor)
- Backend-level access control

###  Security
- JWT stored in localStorage
- Protected API routes
- Auth Guard on frontend

---

##  Project Structure

```
Document-Management-System/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── dashboard/
│   │   │   ├── services/
│   │   │   └── app.routes.ts
│   │   └── main.ts
│
└── README.md
```

---

##  Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/dms
JWT_SECRET=supersecretkey
```

Start backend server:

```bash
npx nodemon server.js
```

Backend runs at:
```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Frontend runs at:
```
http://localhost:4200
```

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Documents
- `POST /api/documents/upload`
- `GET /api/documents`
- `POST /api/documents/version`
- `PUT /api/documents/permissions`

---

##  Testing
- APIs tested using Postman
- Frontend tested via browser
- JWT validation confirmed

---

##  Screenshots
- Backend server running
- Postman: Register & Login
- Postman: Document upload
- Postman: Version upload
- Frontend: Login, Register, Dashboard


---

##  Notes
- Frontend UI is intentionally minimal
- Backend focuses on correctness, security, and scalability
- Demonstrates real-world document management concepts

---
