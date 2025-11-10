import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from '../NavigationBar/NavBar';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] to-[#bfdbfe] text-gray-800 flex flex-col">
      <NavBar />
      <div className="flex-1 container mx-auto py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;