const jwt = require('jsonwebtoken');


/**
 * uid = valor de identificacior unico del usuario
 * email = email del usuario
 * **/
const generateJwt = ( uid = '' ,email) => {

    return new Promise( (resolve, reject) =>{

        const payload = {uid,email};

        jwt.sign( payload , process.env.SECURE_KEY, {
            expiresIn: '48h'
        }, (err, token) => {

            if(err) {
                reject('No se pudo generar el Token')
            } else{
                resolve( token );
            }
        })
    })

}


module.exports = {
    generateJwt
}