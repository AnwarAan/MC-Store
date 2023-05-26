import mongoose from 'mongoose';
import config from './config.js';

const uri = `mongodb+srv://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}`;
const option = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const mongooseConnection = () => {
  mongoose
    .connect(uri, option)
    .then(() => console.log('Success Connect DB'))
    .catch((error) => console.log(error));
};

export default mongooseConnection;
