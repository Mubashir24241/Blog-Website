import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project2.h8ibr.mongodb.net/?retryWrites=true&w=majority&appName=project2`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
};

export default Connection;
