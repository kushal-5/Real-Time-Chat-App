# Real-Time Chat App

> Full‑stack real‑time chat application (frontend on Vercel, backend on Render)

Live demo: https://realtimechat5.vercel.app  
Repository: (this repo)

## Short description

Real‑Time Chat is a responsive, one‑to‑one chat application built with React + Vite and Tailwind on the frontend and Node.js + Express + MongoDB on the backend. It supports real‑time messaging via Socket.IO, secure authentication with JWT (httpOnly cookie + Authorization fallback), profile image uploads (Cloudinary), and message persistence in MongoDB Atlas.

## Features

- Real‑time messaging with Socket.IO
- Online presence (shows online users)
- Authentication: signup, login, logout, protected routes
- Secure httpOnly JWT cookie with `SameSite=None` for cross‑site usage; Authorization header fallback
- Profile image uploads using Cloudinary
- Message and user data persisted in MongoDB Atlas
- Deployed: Frontend on Vercel, Backend on Render

## Tech stack

- Frontend: React, Vite, Tailwind CSS, Zustand (state), axios, socket.io-client
- Backend: Node.js, Express, Socket.IO, MongoDB (Mongoose), Cloudinary
- Deployment: Vercel (frontend), Render (backend)

## Environment variables

Backend (Render) — set these in Render dashboard:

- `PORT` – backend port (e.g. 5001)
- `NODE_ENV` – `production`
- `CLIENT_URL` – `https://realtimechat5.vercel.app` (frontend origin)
- `MONGODB_URI` – your MongoDB connection string
- `JWT_SECRET` – secret for signing JWTs
- `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_CLOUD_NAME` – Cloudinary credentials

Frontend (Vercel) — set these in Project > Environment Variables:

- `VITE_BACKEND_URL` – `https://real-time-chat-app-xbab.onrender.com` (your backend URL)

Make sure you never commit `.env` files or secrets to this repository.

## Local setup

1. Clone the repo:
```bash
git clone <your-repo-url>
cd Real\ Chat\ Appp
```

2. Install and run backend locally:
```bash
cd backend
npm install
cp .env.example .env   # create .env with required variables
npm run dev
```

3. Install and run frontend locally:
```bash
cd ../frontend
npm install
npm run dev
```

## Build & Deploy notes

- Frontend: Vite builds a production bundle and should be deployed to Vercel. Set `VITE_BACKEND_URL` in Vercel Environment Variables before building to ensure the frontend points to your backend.
- Backend: Deploy to Render (or similar). Ensure `CLIENT_URL` and other env vars are configured. Restart after env changes.

## Security notes

- This repository intentionally keeps sensitive credentials out of source control. Use environment variables for secrets.
- The server sets a secure httpOnly cookie for JWT and also returns the token in the login/signup response as a fallback for clients that block third‑party cookies. Storing tokens in `localStorage` carries XSS risk — treat the returned token as a fallback.

## License

See `LICENSE` (All rights reserved — copyright 2025 Kushal Shrestha).

## Contact

Kushal Shrestha — include your email or portfolio link here if you want people to contact you about reuse or collaboration.
# Real-Time-Chat-App
