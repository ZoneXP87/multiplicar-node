const fs = require('fs');
const colors = require('colors');

let listar = (base, limite) => {

    for (let index = 1; index <= limite; index++) {
        console.log(`${index} * ${base} = ${index * base}`);

    }
};

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un número')
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${ base } * ${ index } = ${ base * index }\n`;
        }

        fs.writeFile(`tablas/table-${ base }-al-${ limite }`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`table-${ base }-al-${ limite }.txt`)

        });

    });
};

module.exports = {
    crearArchivo,
    listar
}