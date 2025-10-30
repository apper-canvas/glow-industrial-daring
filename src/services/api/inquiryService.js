import { getApperClient } from "@/services/apperClient";

class InquiryService {
  constructor() {
    this.tableName = "inquiry_c";
  }

  async getAll() {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.fetchRecords(this.tableName, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "company_name_c" } },
          { field: { Name: "contact_name_c" } },
          { field: { Name: "email_c" } },
          { field: { Name: "phone_c" } },
          { field: { Name: "service_type_c" } },
          { field: { Name: "message_c" } },
          { field: { Name: "timestamp_c" } }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      console.error("Error fetching inquiries:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.getRecordById(this.tableName, id, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "company_name_c" } },
          { field: { Name: "contact_name_c" } },
          { field: { Name: "email_c" } },
          { field: { Name: "phone_c" } },
          { field: { Name: "service_type_c" } },
          { field: { Name: "message_c" } },
          { field: { Name: "timestamp_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching inquiry ${id}:`, error?.response?.data?.message || error);
      throw error;
    }
  }

  async create(inquiryData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Name: inquiryData.contact_name_c || inquiryData.contactName,
          company_name_c: inquiryData.company_name_c || inquiryData.companyName,
          contact_name_c: inquiryData.contact_name_c || inquiryData.contactName,
          email_c: inquiryData.email_c || inquiryData.email,
          phone_c: inquiryData.phone_c || inquiryData.phone,
          service_type_c: inquiryData.service_type_c || inquiryData.serviceType,
          message_c: inquiryData.message_c || inquiryData.message,
          timestamp_c: new Date().toISOString()
        }]
      };

      const response = await apperClient.createRecord(this.tableName, payload);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);

        if (failed.length > 0) {
          console.error(`Failed to create ${failed.length} inquiries: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error creating inquiry:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async update(id, inquiryData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Id: parseInt(id),
          company_name_c: inquiryData.company_name_c,
          contact_name_c: inquiryData.contact_name_c,
          email_c: inquiryData.email_c,
          phone_c: inquiryData.phone_c,
          service_type_c: inquiryData.service_type_c,
          message_c: inquiryData.message_c,
          timestamp_c: inquiryData.timestamp_c
        }]
      };

      const response = await apperClient.updateRecord(this.tableName, payload);

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successful = response.results.filter(r => r.success);
        const failed = response.results.filter(r => !r.success);

        if (failed.length > 0) {
          console.error(`Failed to update ${failed.length} inquiries: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error updating inquiry:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.deleteRecord(this.tableName, {
        RecordIds: [parseInt(id)]
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const failed = response.results.filter(r => !r.success);
        if (failed.length > 0) {
          console.error(`Failed to delete ${failed.length} inquiries: ${JSON.stringify(failed)}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Error deleting inquiry:", error?.response?.data?.message || error);
      throw error;
    }
  }
}

export default new InquiryService();