# 🚀 FinTrack – Personal Finance Dashboard

A modern, scalable **personal finance management web app** built with **React, TypeScript, Redux Toolkit, and RTK Query**.  
It enables users to efficiently track **income, expenses, and remaining balance** with real-time updates, API integration, and a clean UI.

---

## ✨ Why This Project Stands Out

✅ Enterprise-level folder structure & architecture  
✅ Global state management using **Redux Toolkit + RTK Query**  
✅ Fully type-safe with **TypeScript**  
✅ **JSON Server** used to simulate backend API (GET & POST requests)  
✅ Modern UI built with **Tailwind CSS + reusable components**  
✅ Smart and optimized data handling with **automatic caching & refetching**  
✅ **React Hook Form** for smooth form handling and validation  
✅ Finance analytics: **Total Income, Total Expense, Remaining Balance** displayed dynamically  

---

## 🛠️ Tech Stack

| Category           | Technology                          |
|--------------------|--------------------------------------|
| Frontend Framework | React + TypeScript + Vite           |
| State Management   | Redux Toolkit (RTK)                 |
| API Integration    | RTK Query                           |
| Styling            | Tailwind CSS                        |
| Form Handling      | React Hook Form                     |
| Mock Backend       | JSON Server                         |
| Routing            | React Router DOM v6                 |

---

## 🧠 Core Features

### ✅ Dashboard Overview  
- 💰 Total Income  
- 💸 Total Expense  
- 💼 Remaining Balance  

### ✅ Transaction Management  
✔ Fetch & display all transactions using RTK Query  
✔ Add Income / Expense via modal form  
✔ Store data in **db.json** using POST API  
✔ UI auto-refresh using `invalidatesTags`  

### ✅ Reusable & Scalable UI  
✔ Button, SummaryCard, Modal, Table Components  
✔ Organized file structure with clean separation of concerns  
✔ Responsive layout using Tailwind CSS  

---

## 📊 Data Flow & Architecture

JSON Server → RTK Query API → Redux Store → React Components

**UI Render Flow:**


---

## 📁 Folder Structure

/src
├── assets/ # Images or icons (if any)
├── components/
│ ├── Button.tsx
│ ├── Modal.tsx
│ ├── SummaryCard.tsx
│ ├── Footer.tsx
│ └── RootLayout.tsx
├── Dashboard/
│ ├── Home.tsx
│ ├── ExpenseIncomeGraph.tsx
│ └── RecentTransactions.tsx
├── Transactions/
│ └── AddTransaction.tsx
├── NavigationBar/
│ └── NavBar.tsx
├── store/
│ ├── apis/
│ │ └── transactionsApi.ts
│ └── index.ts # Store configuration
├── App.tsx # App routes setup
├── main.tsx # App entry point
└── db.json # JSON Server database


## ⚡ How to Run Locally

# 1. Clone the Repository
git clone https://github.com/yourusername/fintrack.git
cd fintrack

# 2. Install Dependencies
npm install

# 3. Start Frontend (Vite)
npm run dev

# 4. Start JSON Server Backend
npm json-server --watch db.json --port 3000
# or
npm run start:server
