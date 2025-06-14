// import { getEmpresas } from "../controller/empresa";

import {Sequelize} from 'sequelize'

const sequelize = new Sequelize(
 'demo',
 'root',
 'Yayo13%79Mza',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
     // disable logging; default: console.log
    logging: false
  }
);
export default sequelize;

