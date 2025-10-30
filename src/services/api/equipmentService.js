import { getApperClient } from "@/services/apperClient";

class EquipmentService {
  constructor() {
    this.tableName = "equipment_c";
  }

  async getAll() {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.fetchRecords(this.tableName, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "name_c" } },
          { field: { Name: "category_c" } },
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
      console.error("Error fetching equipment:", error?.response?.data?.message || error);
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
          { field: { Name: "category_c" } },
          { field: { Name: "specifications_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching equipment ${id}:`, error?.response?.data?.message || error);
      throw error;
    }
  }

  async create(equipmentData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Name: equipmentData.name_c || equipmentData.Name,
          name_c: equipmentData.name_c,
          category_c: equipmentData.category_c,
          specifications_c: equipmentData.specifications_c
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
          console.error(`Failed to create ${failed.length} equipment: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error creating equipment:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async update(id, equipmentData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Id: parseInt(id),
          name_c: equipmentData.name_c,
          category_c: equipmentData.category_c,
          specifications_c: equipmentData.specifications_c
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
          console.error(`Failed to update ${failed.length} equipment: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error updating equipment:", error?.response?.data?.message || error);
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
          console.error(`Failed to delete ${failed.length} equipment: ${JSON.stringify(failed)}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Error deleting equipment:", error?.response?.data?.message || error);
      throw error;
    }
  }
}

export default new EquipmentService();