import { getApperClient } from "@/services/apperClient";

class TeamService {
  constructor() {
    this.tableName = "team_member_c";
  }

  async getAll() {
    try {
      const apperClient = getApperClient();
      const response = await apperClient.fetchRecords(this.tableName, {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "name_c" } },
          { field: { Name: "role_c" } },
          { field: { Name: "bio_c" } },
          { field: { Name: "experience_c" } },
          { field: { Name: "image_c" } }
        ],
        pagingInfo: { limit: 100, offset: 0 }
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data || [];
    } catch (error) {
      console.error("Error fetching team members:", error?.response?.data?.message || error);
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
          { field: { Name: "role_c" } },
          { field: { Name: "bio_c" } },
          { field: { Name: "experience_c" } },
          { field: { Name: "image_c" } }
        ]
      });

      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      return response.data;
    } catch (error) {
      console.error(`Error fetching team member ${id}:`, error?.response?.data?.message || error);
      throw error;
    }
  }

  async create(memberData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Name: memberData.name_c || memberData.Name,
          name_c: memberData.name_c,
          role_c: memberData.role_c,
          bio_c: memberData.bio_c,
          experience_c: memberData.experience_c,
          image_c: memberData.image_c
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
          console.error(`Failed to create ${failed.length} team members: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error creating team member:", error?.response?.data?.message || error);
      throw error;
    }
  }

  async update(id, memberData) {
    try {
      const apperClient = getApperClient();
      const payload = {
        records: [{
          Id: parseInt(id),
          name_c: memberData.name_c,
          role_c: memberData.role_c,
          bio_c: memberData.bio_c,
          experience_c: memberData.experience_c,
          image_c: memberData.image_c
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
          console.error(`Failed to update ${failed.length} team members: ${JSON.stringify(failed)}`);
        }

        return successful.length > 0 ? successful[0].data : null;
      }

      return null;
    } catch (error) {
      console.error("Error updating team member:", error?.response?.data?.message || error);
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
          console.error(`Failed to delete ${failed.length} team members: ${JSON.stringify(failed)}`);
          return false;
        }
      }

      return true;
    } catch (error) {
      console.error("Error deleting team member:", error?.response?.data?.message || error);
      throw error;
    }
  }
}

export default new TeamService();