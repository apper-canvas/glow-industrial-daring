import { getApperClient } from "@/services/apperClient";

class ServiceService {
  constructor() {
    this.tableName = "service_c";
  }

  async getAll() {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.fetchRecords(this.tableName, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "name_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "capabilities_c" } },
          { field: { Name: "specifications_c" } }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      console.error("Error fetching services:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async getById(id) {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.getRecordById(this.tableName, id, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "name_c" } },
          { field: { Name: "description_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "category_c" } },
          { field: { Name: "capabilities_c" } },
          { field: { Name: "specifications_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching service ${id}:`, error?.response?.data?.message || error);
      throw error;
    }
  }

  async create(serviceData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Name: serviceData.name_c || serviceData.Name,
          name_c: serviceData.name_c,
          description_c: serviceData.description_c,
          icon_c: serviceData.icon_c,
          category_c: serviceData.category_c,
          capabilities_c: serviceData.capabilities_c,
          specifications_c: serviceData.specifications_c
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
          console.error(`Failed to create ${failed.length} services: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error creating service:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async update(id, serviceData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Id: parseInt(id),
          name_c: serviceData.name_c,
          description_c: serviceData.description_c,
          icon_c: serviceData.icon_c,
          category_c: serviceData.category_c,
          capabilities_c: serviceData.capabilities_c,
          specifications_c: serviceData.specifications_c
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
          console.error(`Failed to update ${failed.length} services: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error updating service:", error?.response?.data?.message || error);
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
          console.error(`Failed to delete ${failed.length} services: ${JSON.stringify(failed)}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Error deleting service:", error?.response?.data?.message || error);
      throw error;
    }
  }
}

export default new ServiceService();