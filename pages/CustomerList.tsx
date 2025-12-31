
import React, { useState } from 'react';
import { Search, Plus } from "lucide-react";
import { MOCK_CUSTOMERS } from "../data/mock";
import { StatusBadge } from "../components/UI";
import { Customer } from "../types";

export const CustomerList = ({ onSelectCustomer }: { onSelectCustomer: (c: Customer) => void }) => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredCustomers = MOCK_CUSTOMERS.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.phone.includes(searchTerm)
    );

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Danh sách khách hàng</h2>
          <button className="flex items-center px-4 py-2 bg-[#ED1B2E] text-white rounded-lg hover:bg-red-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Thêm mới
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Tìm theo tên hoặc số điện thoại..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ED1B2E] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Họ tên</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phân loại (Income)</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Lịch hẹn</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr 
                    key={customer.id} 
                    className="hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => onSelectCustomer(customer)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#ED1B2E] font-bold mr-3">
                          {customer.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={customer.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.psychographics.incomeRange}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {customer.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200">{tag}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(customer.nextFollowUp).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-[#ED1B2E] hover:text-red-900">Chi tiết</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};
