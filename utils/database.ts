

import mongoose from 'mongoose';

let isConnected = false; // track the connection
const connectOptions = {
  dbName: 'zloter',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectToDB = async () => {
  try {
    if (isConnected) {
      console.log('MongoDB is already connected');
      return;
    }

    // Ensure that the connection is closed before attempting to reconnect
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URL as string, connectOptions);
      isConnected = true;
      console.log('MongoDB connected');
    } else {
      console.log('Closing existing MongoDB connection...');
      await mongoose.connection.close();
      isConnected = false;

      // Reconnect after closing the existing connection
      await mongoose.connect(process.env.MONGODB_URL as string, connectOptions);
      isConnected = true;
      console.log('MongoDB reconnected');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    isConnected = false;
  }
};

// Ensure that the connection is closed when the Node.js process exits
process.on('SIGINT', async () => {
  if (isConnected) {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  }
});



// import mongoose from "mongoose";
// let isConnected = false; // track the connection
// const connectOptions = {
//     dbName: 'zloter',
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true)
//     if (isConnected) {
//         console.log('MongoDB is already connected');
//         return;
//     }
//     try {
//         await mongoose.connect(process.env.MONGODB_URL as string, connectOptions as any);
//         isConnected = true;
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.log(error);
//     }
// }
