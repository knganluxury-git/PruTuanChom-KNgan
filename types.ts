
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: 'LEAD' | 'PROSPECT' | 'CUSTOMER' | 'EXPIRED';
  personalInfo: {
    age: number;
    job: string;
    maritalStatus: string;
    address: string;
  };
  psychographics: {
    incomeRange: string;
    personalityType: string;
    attitude: string;
    relationshipLevel: 'Cold' | 'Warm' | 'Hot';
  };
  nextFollowUp: string;
  tags: string[];
}

export interface Interaction {
  id: string;
  type: 'CALL' | 'MEETING' | 'ZALO';
  content: string;
  date: string;
}
