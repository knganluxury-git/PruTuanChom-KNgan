
import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";
import { Customer } from "../types";

export const generateConsultationScript = async (customer: Customer, scenario: string) => {
  try {
    // Gọi hàm 'generateConsultationScript' trên Firebase Cloud Functions
    const generateScript = httpsCallable(functions, 'generateConsultationScript');
    
    // Gửi dữ liệu lên Server
    const result = await generateScript({ 
      customer: customer, 
      scenario: scenario 
    });

    // Nhận kết quả trả về
    return (result.data as any).text;

  } catch (error) {
    console.error("Cloud Function Error:", error);
    return "Xin lỗi, không thể kết nối đến máy chủ AI. Vui lòng kiểm tra lại cấu hình Firebase.";
  }
};
