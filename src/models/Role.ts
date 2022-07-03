import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize(String(process.env.DB_CONNECTION_URL));


const Role = sequelize.define("Role", {
  id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.NOW,
    allowNull: false
  }
});


export default Role;