import { DataTypes, Model } from 'sequelize';
import { sequelize } from '.';
import User from './user';
import Quest from './quest';

export default class StorageLog extends Model {declare id:number}

StorageLog.init({
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  imageDone: DataTypes.STRING
}, {
  sequelize,
  modelName: 'StorageLog',
});

StorageLog.belongsTo(User, {as: 'owner'})
StorageLog.belongsTo(Quest, {as: 'quest'})