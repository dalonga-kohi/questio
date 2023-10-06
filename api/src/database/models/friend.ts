import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';
import User from './user';

export default class Friend extends Model {declare id: number;}

Friend.init({
}, {
  sequelize,
  modelName: 'Friend',
});

Friend.belongsTo(User, {as: 'follower'})
Friend.belongsTo(User, {as: 'target'})