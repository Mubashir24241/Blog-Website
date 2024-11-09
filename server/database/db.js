import mongoose from 'mongoose';

const Connection = async () => {
    const username = "mubashirahmadcse2";
    const password = "YuVhDvnAZxUu5VsS";
    const URL = `mongodb+srv://${username}:${password}@project2.h8ibr.mongodb.net/?retryWrites=true&w=majority&appName=project2`;

    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database:", error.message);
    }
};

export default Connection;
