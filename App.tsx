
import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";
import { CustomerList } from "./pages/CustomerList";
import { CustomerDetail } from "./pages/CustomerDetail";
import { Calendar } from "./pages/Calendar";
import { Products } from "./pages/Products";
import { Customer } from "./types";

const App = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'customers' | 'calendar' | 'products'>('dashboard');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleBackToCustomerList = () => {
    setSelectedCustomer(null);
  };

  // Reset selected customer when tab changes
  const handleTabChange = (tab: any) => {
      setActiveTab(tab);
      setSelectedCustomer(null);
  }

  return (
    <div className="flex h-screen bg-[#f3f4f6]">
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} isSidebarOpen={isSidebarOpen} />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-auto">
          {selectedCustomer ? (
            <CustomerDetail customer={selectedCustomer} onBack={handleBackToCustomerList} />
          ) : (
            <>
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'customers' && <CustomerList onSelectCustomer={handleSelectCustomer} />}
              {activeTab === 'calendar' && <Calendar />}
              {activeTab === 'products' && <Products />}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
