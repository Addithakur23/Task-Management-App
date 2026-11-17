# 📝 Task Management App

A full-stack Task Management web application built using the MERN stack.  
Users can register, log in securely, and manage their tasks with authentication-based access.

---

## 🚀 Live Demo

Frontend: https://task-management-app-smoky-five.vercel.app
Backend: https://task-management-app-backend-d79n.onrender.com

---

## 📌 Features

- 🔐 Secure authentication using JWT (HttpOnly cookies)
- 🧾 Create, Read, Update, Delete (CRUD) tasks
- 👤 User-based task isolation (each user sees only their tasks)
- 🔒 Protected routes (Dashboard accessible only after login)
- 🎨 Responsive UI with Tailwind CSS
- 🌍 Production-ready deployment (Vercel + Render)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- Tailwind CSS v3
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cookie-based auth (HttpOnly, Secure)

---

## 🔐 Authentication Flow

1. User logs in.
2. Server generates JWT.
3. JWT stored in HttpOnly cookie.
4. Protected routes verify token via middleware.
5. Logout clears cookie securely.

---

## 📂 Project Structure


Frontend/
├── src/
│ ├── pages/
│ ├── App.jsx
│ ├── main.jsx
│
Backend/
├── middleware/
├── models/
├── server.js


---

## ⚙️ Environment Variables

### Backend (.env)


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production


### Frontend (.env)


VITE_API_URL=https://task-management-app-backend-d79n.onrender.com


---

## 🔄 Running Locally

### 1️⃣ Clone the repository


git clone https://github.com/Addithakur23/Task-Management-App  (Frontend)

https://github.com/Addithakur23/Task-Management-App-Backend (Backend)
---

### 2️⃣ Backend Setup


cd backend
npm install
npm run dev


---

### 3️⃣ Frontend Setup


cd frontend
npm install
npm run dev


---

## 🌐 Deployment

- Frontend deployed on **Vercel**
- Backend deployed on **Render**
- Configured CORS and secure cookies for cross-domain authentication

---

## 📚 Learning Outcomes

- Implemented JWT authentication using HttpOnly cookies
- Managed secure cookie configuration for production
- Handled cross-origin resource sharing (CORS)
- Built protected routes in React
- Designed responsive UI using Tailwind CSS
- Understood SPA routing fallback for deployment

---

## 👨‍💻 Author

Aditya  
Aspiring Backend Developer 🚀

---

## 📄 License

This project is for educational purposes.
🔥 Extra Pro Tip

Replace:

https://your-frontend.vercel.app
https://your-ba
