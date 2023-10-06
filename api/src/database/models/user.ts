import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.';

export default class User extends Model {declare id: number;}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  preferences: DataTypes.STRING,
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: ''
  }
}, {
  sequelize,
  timestamps: true,
  defaultScope: {
    attributes: {
      exclude: ['password']
    }
  }
});


