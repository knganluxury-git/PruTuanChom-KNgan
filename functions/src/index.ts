
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { GoogleGenAI } from "@google/genai";

// Khởi tạo Gemini Client
// LƯU Ý: API KEY được lấy từ biến môi trường của Firebase Functions
// Bạn cần set biến này bằng lệnh: firebase functions:secrets:set GEMINI_API_KEY
const apiKey = process.env.GEMINI_API_KEY;

export const generateConsultationScript = onCall({ secrets: ["GEMINI_API_KEY"] }, async (request) => {
  // 1. Kiểm tra xác thực (Chỉ cho phép user đã đăng nhập gọi)
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const { customer, scenario } = request.data;
  
  if (!apiKey) {
      logger.error("API Key missing");
      throw new HttpsError('internal', 'Server configuration error.');
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  const model = "gemini-3-flash-preview"; 

  const prompt = `
    Bạn là một chuyên gia tư vấn bảo hiểm cao cấp của Prudential (MDRT).
    Hãy viết một kịch bản tư vấn (hoặc email/tin nhắn) cho khách hàng sau:
    
    THÔNG TIN KHÁCH HÀNG:
    - Tên: ${customer.name}
    - Tuổi: ${customer.personalInfo.age}
    - Nghề nghiệp: ${customer.personalInfo.job}
    - Tình trạng gia đình: ${customer.personalInfo.maritalStatus}
    - Thu nhập ước tính: ${customer.psychographics.incomeRange}
    - Tính cách: ${customer.psychographics.personalityType}
    - Mức độ thân thiết: ${customer.psychographics.relationshipLevel}
    - Mối quan tâm (Tags): ${customer.tags.join(", ")}

    YÊU CẦU:
    - Tình huống: ${scenario}
    - Giọng văn: Chuyên nghiệp nhưng gần gũi, thấu hiểu, phù hợp với tính cách khách hàng.
    - Cấu trúc: Ngắn gọn, đi thẳng vào vấn đề quan tâm của khách.
    - Định dạng: Trả về Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });

    logger.info("Content generated successfully for user", request.auth.uid);
    
    return {
        text: response.text
    };

  } catch (error) {
    logger.error("Gemini API Error", error);
    throw new HttpsError('internal', 'Failed to generate content from AI.');
  }
});
