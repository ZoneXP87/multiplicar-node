const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.trap))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando inválido');
        break;
}


//console.log(process);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];