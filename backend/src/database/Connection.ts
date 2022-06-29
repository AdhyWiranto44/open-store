import { Sequelize } from "sequelize";
import { LOCAL_ENV, PRODUCTION_ENV } from "../helpers/constants";


class Connection {

  static conn: any = null;

  static connect() {
    if (Connection.conn === null) {
      console.log("Creating new connection...");
      Connection.conn = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
      console.log("New connetion created.");
    }

    return Connection.conn;
  }

  closeConnection() {
    return Connection.conn.closeConnection();
  }

  dropDatabase() {
    return Connection.conn.dropDatabase();
  }
}


export default Connection;