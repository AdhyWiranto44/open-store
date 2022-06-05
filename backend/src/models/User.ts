import { Sequelize, DataTypes } from 'sequelize';
import Role from './Role';
import UserStatus from './UserStatus';
const sequelize = new Sequelize(String(process.env.DB_CONNECTION_URL));


const User = sequelize.define('User', {
  id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    autoIncrement: true
  },
  role_id: {
    references: {
      model: Role,
      key: "id"
    },
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status_id: {
    references: {
      model: UserStatus,
      key: "id"
    },
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
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

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export default User;