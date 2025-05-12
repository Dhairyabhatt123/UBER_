# 🚖 Uber Clone – Real-Time Ride Booking Web App

A full-stack, real-time ride-hailing web application inspired by Uber. This project supports two types of users — **Riders (Users)** and **Captains (Drivers)** — and provides end-to-end functionality from ride request to completion.

Built with a **modular company-style folder structure**, the app integrates Google Maps for geolocation, real-time communication using Socket.IO, secure authentication, and MongoDB for persistent storage.

---

## 🔥 Core Features

### 🌍 Real-Time Location and Distance:
- Integrated **Google Maps JavaScript API** to fetch real-time geolocation of both Captain and User.
- Calculate **dynamic price** based on live distance using the Maps Distance Matrix API.

### 🔗 Real-Time Socket.IO Communication:
- Establishes a **bi-directional, event-based connection** between User and Captain.
- Captains receive ride requests instantly.
- Users see real-time updates: ride accepted, captain arrival, ride start, ride completion.

### 🔒 Authentication & Security:
- JWT-based secure login system for both Riders and Captains.
- User data and passwords are stored securely using **bcrypt hashing**.
- Token-based access to protected routes and ride functionalities.

### 🌐 Frontend to Backend Communication:
- **Axios** used to connect frontend to backend efficiently with API calls.
- Role-based dashboards for Users and Captains.

### 💾 Persistent Data Layer:
- **MongoDB** stores all Users, Captains, Rides, and location data.
- Mongoose ODM used for schema modeling.

---

## 👥 Roles

### 🧑‍💼 Rider (User):
- Register/Login
- View nearby captains
- Request a ride
- View estimated time & price
- Live track captain location

### 🚗 Captain (Driver):
- Register/Login
- Set availability status
- Receive ride requests in real-time
- Navigate to pickup and drop-off
- Complete the ride and update status

---

## 🧱 Project Architecture

Uber/
│
├── client/ # Frontend (React.js)
│ ├── components/
│ ├── pages/
│ ├── utils/
│ └── App.js
│
├── server/ # Backend (Node.js + Express)
│ ├── controllers/ # Route logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API endpoints
│ ├── middlewares/ # Auth, validation, error handlers
│ ├── sockets/ # Socket.IO server logic
│ ├── config/ # DB & API config
│ └── index.js
│
├── .env
├── README.md
└── package.json
