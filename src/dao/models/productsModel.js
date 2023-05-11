import mongoose from 'mongoose';


const collection = 'products';

const schema = new mongoose.Schema({

		title: {
            type: String,
            require: true
        },
        description: {
            type: String,
        },		
        price: {
            type: Number,
            require: true
        },		
        thumbnail: {
            type: String,
        },		
        code: {
            type: String,
            require: true
        },	
        stock: {
            type: Number,
            require: true
        },
});

const productsModel = mongoose.model( collection, schema );

export default productsModel;