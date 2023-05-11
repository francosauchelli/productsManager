import { Router } from 'express';


const router = Router();

router.get( '/', ( req, res ) => {

    console.log( res )
    res.render( 'products', {} );
});

export default router;