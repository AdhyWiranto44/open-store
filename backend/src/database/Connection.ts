import { connect, connection, createConnection } from "mongoose";
import { Sequelize } from "sequelize/types";


class Connection extends Sequelize {

  connection;

  constructor() {
    super();
    this.connection = new Sequelize(String(process.env.DB_CONNECTION_URL));
  }
}


export default Connection;