import { DataTypes, Model } from 'sequelize'
import { sequelize } from '.'
import User from './user'

export default class Quest extends Model {
  declare id: number
}

Quest.init(
  {
    title: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    steps: DataTypes.STRING(300),
    tags: DataTypes.STRING(65),
  },
  {
    sequelize,
    modelName: 'Quest',
  },
)

Quest.belongsTo(User, { as: 'author' })
