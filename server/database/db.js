import mongoose from 'mongoose';

const Connection = async () => {
    const URL =`mongodb+srv://mubashirahmadcse2020:pQV45GjaR8EWxALS@ecommerce.qvlke.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecommerce`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;