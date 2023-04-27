import { Sequelize } from "sequelize";
import config from "./config.js";

export const postgresUri = `postgres://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;
export const sequelize = new Sequelize(postgresUri);
const postgresConnection = async () => {
  try {
    sequelize.sync();
    await sequelize.authenticate();
    console.log("Success Connect Postgres");
  } catch (error) {
    console.log(error, ": Error Connect Postgres");
  }
};

export default postgresConnection;
