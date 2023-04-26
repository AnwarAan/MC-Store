import mongoose from "mongoose";
import { Sequelize } from "sequelize";
import config from "./config.js";

//Mongo Connect
const uri: string = `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}`;
const option = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 60000,
  family: 4,
};
const mongooseConnection = () => {
  mongoose
    .connect(uri, option)
    .then(() => console.log("Success Connect Mongo"))
    .catch((error) => console.log(error));
};

//Postgres Connect
export const postgresUri = `postgres://${config.POSTGRES_USER}:${config.MONGO_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;
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

export default { mongooseConnection, postgresConnection };
