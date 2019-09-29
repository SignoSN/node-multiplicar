const opts = {
	base: {
		demand: true,
		alias: 'b',
		describe: "Número base de la tabla"
	},
	limite: {
		default: 10,
		alias: 'l',
		describe: "Número limite de la tabla"
	}
}
const argv = require('yargs')
.command('listar', 'Imprime la tabla en consola',opts)
.command('crear', 'Crea un archivo de texto de la tabla',opts)
.help()
.argv;

module.exports = {
	argv
}