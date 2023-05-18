import { Router } from 'express';

import productsModel from '../dao/models/productsModel.js';
import ManagerAccess from '../dao/managers/ManagerAccess.js';


const router = Router();

const manager = new ManagerAccess();

// GET "insertion" method to insert products
router.get( '/insertion', ( req, res ) => {

    manager.registerLog( 'Products inserted' );
    res.send({ message: 'GET insertion' });
});

// GET
router.get( '/', async ( req, res ) => {

    const { page = 1, limit = 10, query, sort } = req.query;

    // const products = await productsModel.find().lean();
    manager.registerLog( 'Products request' );

    const { docs, hasPrevPage, hasNextPage, prevPage, nextPage } = 
        await productsModel.paginate( {}, {
            limit,
            page,
            query,
            sort,
            lean: true
        });

    const products = docs;

    res.render( 'products', {
        products,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
});

// GET by ID
router.get( '/:pid', async ( req, res ) => {

    const id = req.params.pid;

    const result = await productsModel.find({ _id: id });

    manager.registerLog( `Request product ID: ${ id }` );

    res.send({ result });
});

// POST
router.post( '/', async ( req, res ) => {

    const { title, description, price, thumbnail, code, stock } = req.body;

    if( !title || !price || !code || !stock ) {
        return res.status( 400 ).send({
        error: 'Incomplete',
        message: 'Complete all required fields'
    })};

    const product = {
        title, description, price, thumbnail, code, stock
    }

    const result = await productsModel.create( product )

    manager.registerLog( `Product: ${ stock } x "${ title }" added` );

    res.send({ result });
});

// PUT
router.put( '/:pid', async ( req, res ) => {

    const id = req.params.pid;
    const newProduct = req.body;

    manager.registerLog( `Product ID: ${ id } updated.` );

    const result = await productsModel.updateOne({ _id: id }, { $set: newProduct });

    res.send({ result });
});

// DELETE
router.delete( '/:pid', async ( req, res ) => {

    const id = req.params.pid;

    const result = await productsModel.deleteOne({ _id: id });

    manager.registerLog( `Product ID: ${ id } deleted.` );

    res.send({ result });
});

export default router;