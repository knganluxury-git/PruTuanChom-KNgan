
import React from 'react';
import { Menu, Bell, Settings } from "lucide-react";

export const Header = ({ isSidebarOpen, setIsSidebarOpen }: any) => (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
       <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
       </button>
       <div className="hidden md:block text-gray-500 text-sm">Prudential Vietnam • Agent Portal</div>
       <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
             <Bell className="w-5 h-5 text-gray-600" />
             <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
             <Settings className="w-5 h-5 text-gray-600" />
          </button>
       </div>
    </header>
);
