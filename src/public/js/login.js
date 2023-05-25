const form = document.getElementById( 'login-form');

form.addEventListener( 'submit', ( event) => {
    event.preventDefault();

    const object = {};

    const data = new FormData( form );
    data.forEach(( value, key ) => object[ key ] = value );

    fetch( '/api/session/login', {

        method: 'POST',
        body: JSON.stringify( object ),
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(result=>{
        if(result.status == 200){
            window.location.replace( '/' );
        }
    });
});
