
import React from 'react';
import { Users, Calendar, BarChart3, Briefcase } from "lucide-react";
import { ShieldIcon } from './UI';

export const Sidebar = ({ activeTab, setActiveTab, isSidebarOpen }: any) => (
  <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
    <div className="flex items-center justify-center h-16 border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#ED1B2E] rounded-full flex items-center justify-center">
           <ShieldIcon className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">Pru<span className="text-[#ED1B2E]">Agent</span></span>
      </div>
    </div>
    <nav className="p-4 space-y-2">
      {[
        { id: 'dashboard', label: 'Tổng quan', icon: BarChart3 },
        { id: 'customers', label: 'Khách hàng', icon: Users },
        { id: 'calendar', label: 'Lịch & Cuộc hẹn', icon: Calendar },
        { id: 'products', label: 'Sản phẩm', icon: Briefcase },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
            activeTab === item.id 
              ? 'bg-red-50 text-[#ED1B2E] font-medium' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.label}
        </button>
      ))}
    </nav>
    <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
          TV
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Trần Văn Vấn</p>
          <p className="text-xs text-gray-500">Mã: AGT888</p>
        </div>
      </div>
    </div>
  </div>
);
