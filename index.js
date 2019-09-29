const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { multiplicar, listarTabla } = require('./multiplicar/multiplicar');

// codigo

let comando = argv._[0];

switch( comando){
	case "listar":
		//
		listarTabla(argv.base, argv.limite);
		break;
	case "crear":
		//
		multiplicar(argv.base, argv.limite)
			.then(archivo => console.log("Archivo creado: " + colors.brightCyan("%s") , archivo))
			.catch(console.log);
		break;
	default:
		console.log("Comando desconocido");
}
