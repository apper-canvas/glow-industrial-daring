import inquiryData from "@/services/mockData/inquiries.json";

class InquiryService {
  constructor() {
    this.inquiries = [...inquiryData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.inquiries];
  }

  async getById(id) {
    await this.delay(200);
    const inquiry = this.inquiries.find(i => i.Id === parseInt(id));
    if (!inquiry) {
      throw new Error("Inquiry not found");
    }
    return { ...inquiry };
  }

  async create(inquiryData) {
    await this.delay(500);
    const newInquiry = {
      ...inquiryData,
      Id: Math.max(...this.inquiries.map(i => i.Id), 0) + 1,
      timestamp: new Date().toISOString()
    };
    this.inquiries.push(newInquiry);
    return { ...newInquiry };
  }

  async update(id, inquiryData) {
    await this.delay(350);
    const index = this.inquiries.findIndex(i => i.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Inquiry not found");
    }
    this.inquiries[index] = { ...this.inquiries[index], ...inquiryData };
    return { ...this.inquiries[index] };
  }

  async delete(id) {
    await this.delay(250);
    const index = this.inquiries.findIndex(i => i.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Inquiry not found");
    }
    this.inquiries.splice(index, 1);
    return true;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new InquiryService();