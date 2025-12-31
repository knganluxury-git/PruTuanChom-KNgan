
import React, { useState } from 'react';
import { 
    ChevronRight, User, Phone, Mail, Heart, FileText, Sparkles, MessageSquare, Bot 
} from "lucide-react";
import { Customer } from "../types";
import { InfoRow, TabButton, ProductCard } from "../components/UI";
import { MOCK_INTERACTIONS } from "../data/mock";
import { generateConsultationScript } from "../services/ai";

export const CustomerDetail = ({ customer, onBack }: { customer: Customer, onBack: () => void }) => {
    const [activeTab, setActiveTab] = useState<'info' | 'ai' | 'history'>('info');
    const [aiScenario, setAiScenario] = useState("");
    const [aiResult, setAiResult] = useState("");
    const [isLoadingAI, setIsLoadingAI] = useState(false);

    const handleGenerateScript = async () => {
      if (!aiScenario) return;
      setIsLoadingAI(true);
      const result = await generateConsultationScript(customer, aiScenario);
      setAiResult(result);
      setIsLoadingAI(false);
    };

    return (
      <div className="p-6 h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="mr-4 p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-6 h-6 transform rotate-180 text-gray-500" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{customer.name}</h2>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">{customer.id}</span>
              • {customer.personalInfo.job}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-[#ED1B2E]" /> Thông tin cá nhân
              </h3>
              <div className="space-y-4">
                <InfoRow label="Tuổi" value={customer.personalInfo.age} />
                <InfoRow label="Hôn nhân" value={customer.personalInfo.maritalStatus} />
                <InfoRow label="Địa chỉ" value={customer.personalInfo.address} />
                <div className="pt-4 border-t border-gray-100">
                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Liên hệ</h4>
                   <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Phone className="w-4 h-4 mr-2" /> {customer.phone}
                   </div>
                   <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" /> {customer.email}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-[#ED1B2E]" /> Hồ sơ tâm lý
              </h3>
              <div className="space-y-4">
                <InfoRow label="Thu nhập" value={customer.psychographics.incomeRange} />
                <InfoRow label="Tính cách" value={customer.psychographics.personalityType} />
                <InfoRow label="Thái độ" value={customer.psychographics.attitude} />
                <InfoRow label="Quan hệ" value={customer.psychographics.relationshipLevel} />
              </div>
            </div>
          </div>

          {/* Right Column: Tabs (AI, History) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]">
              <div className="flex border-b border-gray-200">
                <TabButton active={activeTab === 'info'} onClick={() => setActiveTab('info')} icon={FileText} label="Tổng quan" />
                <TabButton active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} icon={Sparkles} label="Trợ lý AI" />
                <TabButton active={activeTab === 'history'} onClick={() => setActiveTab('history')} icon={MessageSquare} label="Lịch sử" />
              </div>

              <div className="p-6">
                {activeTab === 'ai' && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                        <Bot className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                        <div>
                            <h4 className="font-semibold text-blue-900">Pru AI Assistant</h4>
                            <p className="text-sm text-blue-700">Tôi có thể giúp bạn soạn kịch bản gọi điện, email giới thiệu sản phẩm, hoặc xử lý từ chối dựa trên hồ sơ của {customer.name}.</p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bạn muốn làm gì?</label>
                        <select 
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-[#ED1B2E] focus:border-[#ED1B2E]"
                            value={aiScenario}
                            onChange={(e) => setAiScenario(e.target.value)}
                        >
                            <option value="">-- Chọn tình huống --</option>
                            <option value="Soạn kịch bản gọi điện mở lời lần đầu (Cold Call)">Gọi điện mở lời lần đầu (Cold Call)</option>
                            <option value="Soạn email giới thiệu sản phẩm Đầu Tư Linh Hoạt">Gửi Email giới thiệu PRU-Đầu Tư</option>
                            <option value="Kịch bản xử lý khi khách nói 'Tôi chưa có tiền'">Xử lý từ chối: "Tôi chưa có tiền"</option>
                            <option value="Kịch bản chúc mừng sinh nhật và khơi gợi nhu cầu mới">Chúc mừng sinh nhật & Upsell</option>
                        </select>
                    </div>

                    <button 
                        disabled={!aiScenario || isLoadingAI}
                        onClick={handleGenerateScript}
                        className={`w-full py-2.5 rounded-lg font-medium flex items-center justify-center text-white transition-all ${!aiScenario || isLoadingAI ? 'bg-gray-400' : 'bg-[#ED1B2E] hover:bg-red-700'}`}
                    >
                        {isLoadingAI ? (
                            <span className="flex items-center"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Đang suy nghĩ...</span>
                        ) : (
                            <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2" /> Tạo kịch bản ngay</span>
                        )}
                    </button>

                    {aiResult && (
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Kết quả từ AI:</h4>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-800 text-sm whitespace-pre-line leading-relaxed">
                                {aiResult}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="text-xs text-gray-500 hover:text-gray-900 flex items-center"><FileText className="w-3 h-3 mr-1"/> Copy nội dung</button>
                                <button className="text-xs text-gray-500 hover:text-gray-900 flex items-center"><Bot className="w-3 h-3 mr-1"/> Thử lại</button>
                            </div>
                        </div>
                    )}
                  </div>
                )}

                {activeTab === 'info' && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800">Ghi chú quan trọng</h3>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-[#ED1B2E] focus:border-[#ED1B2E]" placeholder="Nhập ghi chú về khách hàng..."></textarea>
                    
                    <h3 className="font-semibold text-gray-800 mt-6">Sản phẩm gợi ý (AI Recommended)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ProductCard name="PRU-Đầu Tư Linh Hoạt" reason="Phù hợp thu nhập cao, thích công nghệ" />
                        <ProductCard name="PRU-Hành Trang Tương Lai" reason="Bảo vệ toàn diện cho gia đình" />
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                    <div className="space-y-4">
                        {MOCK_INTERACTIONS.map(int => (
                            <div key={int.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${int.type === 'CALL' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {int.type === 'CALL' ? <Phone className="w-5 h-5"/> : <MessageSquare className="w-5 h-5"/>}
                                </div>
                                <div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-sm font-bold text-gray-800">{int.type}</p>
                                        <span className="text-xs text-gray-500">{int.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{int.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
