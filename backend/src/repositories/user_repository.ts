import { Sequelize } from "sequelize";
import UserInterface from "../interfaces/user_interface";


class UserRepository {

  connection: Sequelize;

  constructor() {
    this.connection = new Sequelize(String(process.env.DB_CONNECTION_URL));
  }

  async getAll(filter: any = {}, limit: number = 1, skip: number = 0): Promise<any> {
    const [users, metadata] = await this.connection.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${skip}`);
    return users;
  }

  async getOne(username: string) {
    const [user, metadata] = await this.connection.query(
      `SELECT * FROM users WHERE username='${username}' LIMIT 1`
    );
    return user;
  }

  async insertOne(user: UserInterface) {
    const [created, metadata] = await this.connection.query({
      query: `INSERT INTO users(id, username, password, role, created_at, updated_at) VALUES ($1, $2, $3, $4, now(), now()) RETURNING *`, 
      values: Object.values(user)
    });

    return created;
  }

  async update(username: string, user: UserInterface) {
    const [updated, metadata] = await this.connection.query(
      `UPDATE users SET ${user} WHERE username='${username}' RETURNING *`
    );

    return updated;
  }

  async remove(username: string) {
    const [removed, metadata] = await this.connection.query(
      `DELETE FROM users WHERE username='${username}' RETURNING *`
    );

    return removed;
  }

}


export default UserRepository;