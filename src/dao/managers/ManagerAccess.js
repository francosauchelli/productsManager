import fs from 'fs';

import __dirname from '../../utils.js';


const filePath = __dirname + '/dao/managers/log.txt';

export default class ManagerAccess {

    async registerLog( activity ) {

        const date = new Date().toLocaleDateString();
        const hour = new Date().toLocaleTimeString();

        const message = `\nDate: ${ date } at ${ hour } - ${ activity }`;

        fs.promises.appendFile( filePath, message, error => console.log( error ));
    }
}