import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js';


const PORT = 8080;
const mongo = 'mongodb+srv://admin14:81LGuPVaz3bpBaQj@productsmanager.ymgz9ck.mongodb.net/';
const connection = mongoose.connect( mongo );

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

// app.use( express.static( __dirname + '/public' ));

// handlebars
app.engine( 'handlebars', handlebars.engine() );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'handlebars' );


app.listen( PORT, () => {
    console.log( `Server connected to port: ${ PORT }`);
});

app.use( '/', viewsRouter );
app.use( '/api/products', productsRouter );

