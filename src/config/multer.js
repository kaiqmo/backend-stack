const multer = require('multer');

const path = require('path');

const crypto = require('crypto'); //para criar crypto

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..','..','tmp'));
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {

                if (err) cb(err);// deu erro

                file.key = `${hash.toString('hex')}-${file.originalname}`; //apostrofe para incluir variavel.

                cb(null,file.key);
            })
        }
    })
};