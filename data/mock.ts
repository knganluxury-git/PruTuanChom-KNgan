
import { Customer, Interaction } from '../types';

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: "CUST001",
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "an.nguyen@example.com",
    status: "PROSPECT",
    personalInfo: {
      age: 35,
      job: "Trưởng phòng Marketing",
      maritalStatus: "Đã kết hôn, 1 con",
      address: "Quận 1, TP.HCM",
    },
    psychographics: {
      incomeRange: "40-50M",
      personalityType: "Cởi mở, thích công nghệ",
      attitude: "Tích cực",
      relationshipLevel: "Warm",
    },
    nextFollowUp: "2023-10-25T09:00:00",
    tags: ["VIP", "Quan tâm đầu tư"],
  },
  {
    id: "CUST002",
    name: "Trần Thị Bích",
    phone: "0912345678",
    email: "bich.tran@example.com",
    status: "LEAD",
    personalInfo: {
      age: 28,
      job: "Freelancer Design",
      maritalStatus: "Độc thân",
      address: "Cầu Giấy, Hà Nội",
    },
    psychographics: {
      incomeRange: "15-20M",
      personalityType: "Thận trọng, kỹ tính",
      attitude: "Lưỡng lự",
      relationshipLevel: "Cold",
    },
    nextFollowUp: "2023-10-26T14:00:00",
    tags: ["Sức khỏe", "GenZ"],
  },
  {
    id: "CUST003",
    name: "Lê Hoàng Nam",
    phone: "0987654321",
    email: "nam.le@example.com",
    status: "CUSTOMER",
    personalInfo: {
      age: 45,
      job: "Chủ doanh nghiệp nhỏ",
      maritalStatus: "Đã kết hôn, 2 con",
      address: "Đà Nẵng",
    },
    psychographics: {
      incomeRange: "100M+",
      personalityType: "Quyết đoán, bận rộn",
      attitude: "Tích cực",
      relationshipLevel: "Hot",
    },
    nextFollowUp: "2023-11-01T10:00:00",
    tags: ["VIP", "Hưu trí"],
  }
];

export const MOCK_INTERACTIONS: Interaction[] = [
  { id: "INT01", type: "CALL", content: "Đã gọi điện giới thiệu sản phẩm Pru-Đầu Tư Linh Hoạt. Khách hàng hẹn gửi mail.", date: "2023-10-20" },
  { id: "INT02", type: "ZALO", content: "Gửi bảng minh họa quyền lợi.", date: "2023-10-21" },
];
