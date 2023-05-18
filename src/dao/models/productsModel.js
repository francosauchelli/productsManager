import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


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

schema.plugin( mongoosePaginate );

const productsModel = mongoose.model( collection, schema );

export default productsModel;