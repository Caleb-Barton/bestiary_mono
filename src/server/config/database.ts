import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', // replace with your PostgreSQL username
  password: 'password', // replace with your PostgreSQL password
  database: 'bestiary', // replace with your database name
  logging: false // set to true if you want to see SQL queries in console
});

export default sequelize;