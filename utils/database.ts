import mongoose from "mongoose";
let isConnected = false; // track the connection
const connectOptions = {
    dbName: 'zloter',
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL as string, connectOptions as any);
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}