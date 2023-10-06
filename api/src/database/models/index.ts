import {Dialect, Sequelize} from 'sequelize';
import process from 'process';
import db from '../database.json'

type Environment = 'development' | 'production' | 'test'

const env = process.env.NODE_ENV || 'development';
const config = db[env as Environment]

export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as Dialect,
  logging: () => 1+1
});

export const checkDB = async() => {
  try {
    await sequelize.authenticate();
    sequelize.sync({alter: true})
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
}