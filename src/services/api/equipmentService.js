import equipmentData from "@/services/mockData/equipment.json";

class EquipmentService {
  constructor() {
    this.equipment = [...equipmentData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.equipment];
  }

  async getById(id) {
    await this.delay(200);
    const item = this.equipment.find(e => e.Id === parseInt(id));
    if (!item) {
      throw new Error("Equipment not found");
    }
    return { ...item };
  }

  async create(equipmentData) {
    await this.delay(400);
    const newEquipment = {
      ...equipmentData,
      Id: Math.max(...this.equipment.map(e => e.Id), 0) + 1
    };
    this.equipment.push(newEquipment);
    return { ...newEquipment };
  }

  async update(id, equipmentData) {
    await this.delay(350);
    const index = this.equipment.findIndex(e => e.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Equipment not found");
    }
    this.equipment[index] = { ...this.equipment[index], ...equipmentData };
    return { ...this.equipment[index] };
  }

  async delete(id) {
    await this.delay(250);
    const index = this.equipment.findIndex(e => e.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Equipment not found");
    }
    this.equipment.splice(index, 1);
    return true;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new EquipmentService();