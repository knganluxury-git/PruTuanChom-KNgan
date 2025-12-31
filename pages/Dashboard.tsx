
import React from 'react';
import { Users, FileText, DollarSign, Calendar } from "lucide-react";
import { StatCard, TaskItem } from "../components/UI";

export const Dashboard = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Xin chào, Tư vấn viên! 👋</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Khách hàng tiềm năng" value="12" icon={Users} color="text-blue-600" bg="bg-blue-50" />
        <StatCard title="Hợp đồng chờ ký" value="3" icon={FileText} color="text-yellow-600" bg="bg-yellow-50" />
        <StatCard title="Doanh số tháng này" value="150tr" icon={DollarSign} color="text-green-600" bg="bg-green-50" />
        <StatCard title="Lịch hẹn tuần này" value="5" icon={Calendar} color="text-purple-600" bg="bg-purple-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Công việc hôm nay</h3>
            <div className="space-y-3">
                <TaskItem time="09:00" title="Gọi lại cho anh An (Chốt HĐ)" type="CALL" />
                <TaskItem time="14:00" title="Gặp chị Bích tại Cafe Highland" type="MEETING" />
                <TaskItem time="16:00" title="Gửi bảng minh họa cho Lead mới" type="EMAIL" />
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h3 className="font-bold text-gray-800 mb-4">Mục tiêu tháng</h3>
             <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                        Tiến độ
                    </span>
                    </div>
                    <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-red-600">
                        75%
                    </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                    <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ED1B2E]"></div>
                </div>
                <p className="text-sm text-gray-600">Bạn cần thêm <strong>50tr FYP</strong> để đạt MDRT sớm!</p>
            </div>
        </div>
      </div>
    </div>
);
