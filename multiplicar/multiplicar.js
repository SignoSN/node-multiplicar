const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
	console.log(`Tabla del ${base} \n`.brightCyan );
	for(i=1; i <= limite; i++){
		console.log(`${i} X ${base} = ${ i * base}`);
	}
	console.log("\n \nFin de la tabla".gray);
}

let multiplicar = (base, limite = 10) =>{

	return new Promise( (resolve, reject) => {

		if(!Number(base)){
			reject(`El valor "${base}" no es un número válido.`);
			return;
		}

		let data = `La Tabla del ${base } \n \n`;

		for( i = 1; i <= limite; i ++)
		{
			data += ` ${ i } X ${ base } = ${ i * base } \n`;
		}

		fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
			if(err)
				reject(err);
			else
				resolve( `tabla-${base}.txt` );
		});
	} )
}

module.exports = {
	multiplicar,
	listarTabla
}


