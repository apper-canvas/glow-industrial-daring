import teamData from "@/services/mockData/team.json";

class TeamService {
  constructor() {
    this.team = [...teamData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.team];
  }

  async getById(id) {
    await this.delay(200);
    const member = this.team.find(t => t.Id === parseInt(id));
    if (!member) {
      throw new Error("Team member not found");
    }
    return { ...member };
  }

  async create(memberData) {
    await this.delay(400);
    const newMember = {
      ...memberData,
      Id: Math.max(...this.team.map(t => t.Id), 0) + 1
    };
    this.team.push(newMember);
    return { ...newMember };
  }

  async update(id, memberData) {
    await this.delay(350);
    const index = this.team.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Team member not found");
    }
    this.team[index] = { ...this.team[index], ...memberData };
    return { ...this.team[index] };
  }

  async delete(id) {
    await this.delay(250);
    const index = this.team.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Team member not found");
    }
    this.team.splice(index, 1);
    return true;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default new TeamService();