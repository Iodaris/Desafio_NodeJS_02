/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
console.log('\nDesafio 002\n');

const ubuntus = [
	{ nome: 'Carlos Silva', idade: 33, peso: 88.5, altura: 1.65, dev: false},
  	{ nome: 'Paula Souza', idade: 40, peso: 70.3, altura: 1.75, dev: true },
  	{ nome: 'Pedro Silva', idade: 28, peso: 65.0, altura: 1.68, dev: true },
  	{ nome: 'Roberta Oliveira', idade: 22, peso: 80.2, altura: 1.80, dev: true },
  	{ nome: 'Diego Silva', idade: 35, peso: 90.0, altura: 1.70, dev: false }
];

let totIdade = 0;
for (const soma of ubuntus) {
	totIdade += soma.idade;
}
console.log(`Soma das idades: ${totIdade}\n`);

let nomesAgrupados = '';
for (let i = 0; i < ubuntus.length; i++) {
	if (i === ubuntus.length -1) {
		nomesAgrupados += ubuntus[i].nome;
	} else {
		nomesAgrupados += ubuntus[i].nome + ', ';
	}
}
console.log(`Nomes agrupados: ${nomesAgrupados}\n`);

let mediaIMC = 0;
for (const ubuntu of ubuntus) {
	mediaIMC += ubuntu.peso / (ubuntu.altura ** 2);
}
mediaIMC /= ubuntus.length;
console.log(`Média de IMC: ${mediaIMC.toFixed(2)}\n`);

let totDev = 0;
for (let i = 0; i < ubuntus.length; i++){
	if (ubuntus[i].dev) {
		totDev++;
	}
}
console.log(`Total de Ubuntus que são devs: ${totDev}\n`);

let silva = '';
for (let i = 0; i<ubuntus.length; i++) {
	if (ubuntus[i].nome.includes('Silva')) {
		if (silva) {
			silva += ', ';
		}
		silva += ubuntus[i].nome;
	}
}
console.log(`Nomes com sobrenome Silva: ${silva}`);
});
