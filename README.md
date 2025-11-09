🚀 FinTrack – Personal Finance Dashboard

A modern and scalable personal finance management web app built with React, TypeScript, Redux Toolkit, and RTK Query.
It allows users to track their income, expenses, and financial balance in real-time with clean UI, API-powered backend, and modular architecture.

✨ Why This Project Stands Out

✔ Built using Enterprise-grade architecture
✔ Fully functional Redux global state + RTK Query API integration
✔ Uses TypeScript for type safety and reliability
✔ Implements a fake backend with JSON Server → mimics a real API
✔ Modular, scalable folder structure for production-ready code
✔ Features clean UI with Tailwind CSS + Reusable Components
✔ Smart Data handling – CRUD operations, caching, auto-refetching
✔ Dynamic Summary Cards → Total Income, Expense, Remaining Balance
✔ Form submission using React Hook Form and RTK Query POST requests

🛠️ Tech Stack
Category	Technology
Frontend	React + TypeScript + Vite
State Management	Redux Toolkit (RTK)
API Handling	RTK Query
Styling	Tailwind CSS
Form Validation	React Hook Form
Mock Backend	JSON Server
Routing	React Router DOM v6
🧠 Core Features

✅ Dashboard Overview – Displays summary cards:

💰 Total Income

💸 Total Expense

💼 Remaining Balance

✅ Transaction Management

View all transactions dynamically from backend

Add new income/expense through a modal form

Data automatically stored in db.json using POST API

Auto UI refresh with RTK Query caching & invalidation

✅ UI/UX & Component-Based Architecture

Reusable components → Button, Modal, SummaryCard, Table

Mobile-responsive design with Tailwind

Clean and minimalistic finance dashboard layout

✅ Real-Time Data Flow

JSON Server → RTK Query → Redux Store → React UI (Dashboard & Tables)


📂 Folder Structure Overview
/src
 ├── components/         # Reusable UI components (Modal, Buttons, SummaryCard)
 ├── pages/              # Dashboard & Transaction Pages
 ├── store/
 │    ├── apis/          # RTK Query API services
 │    └── store.ts       # Redux Store configuration
 ├── assets/             # Images, Icons 
 ├── App.tsx             # Routing setup
 └── main.tsx            # App entry point

 ⚡ How to Run Locally
# 1. Clone Repo
git clone https://github.com/yourusername/fintrack.git
cd fintrack

# 2. Install Dependencies
npm install

# 3. Start Frontend
npm run dev

# 4. Start Backend (JSON Server)
npm run serve:db
# OR
json-server --watch db.json --port 3000
