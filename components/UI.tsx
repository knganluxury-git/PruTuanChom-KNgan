
import React from 'react';
import { CheckCircle2 } from "lucide-react";

export const ShieldIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

export const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    LEAD: "bg-gray-100 text-gray-800",
    PROSPECT: "bg-blue-100 text-blue-800",
    CUSTOMER: "bg-green-100 text-green-800",
    EXPIRED: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100"}`}>
      {status}
    </span>
  );
};

export const InfoRow = ({ label, value }: { label: string, value: string | number }) => (
  <div className="flex justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-gray-900 text-sm font-medium text-right">{value}</span>
  </div>
);

export const StatCard = ({ title, value, icon: Icon, color, bg }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${bg}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

export const TabButton = ({ active, onClick, icon: Icon, label }: any) => (
  <button 
    onClick={onClick}
    className={`flex-1 flex items-center justify-center py-4 text-sm font-medium transition-colors border-b-2 ${active ? 'border-[#ED1B2E] text-[#ED1B2E] bg-red-50/50' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
  >
    <Icon className="w-4 h-4 mr-2" /> {label}
  </button>
);

export const ProductCard = ({ name, reason }: any) => (
    <div className="p-4 border border-green-100 bg-green-50/50 rounded-lg">
        <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
            <div>
                <h4 className="font-bold text-gray-800 text-sm">{name}</h4>
                <p className="text-xs text-gray-600 mt-1">{reason}</p>
            </div>
        </div>
    </div>
);

export const TaskItem = ({ time, title, type }: any) => (
    <div className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
        <div className="w-16 text-sm font-bold text-gray-500">{time}</div>
        <div className={`w-2 h-2 rounded-full mr-3 ${type === 'CALL' ? 'bg-blue-500' : type === 'MEETING' ? 'bg-orange-500' : 'bg-gray-400'}`}></div>
        <div className="flex-1 text-sm font-medium text-gray-800">{title}</div>
        <div className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded">{type}</div>
    </div>
);
