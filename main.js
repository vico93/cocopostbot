/* MÓDULOS */
const fs = require('fs');

/* VARIÁVEIS */

// Constantes
const TEMPLATE_FOLDER = './templates';
const SOURCE_FOLDER = './sources';
const MEME_FOLDER = './memes'; // Output folder

/* FUNÇÕES ÚTEIS */


/* FUNÇÕES PRINCIPAIS */

// Sorteia um template aleatório
function get_template()
{
	// Lê a lista de arquivos dentro da pasta de sources
	var file_list = fs.readdirSync(TEMPLATE_FOLDER + '/*.json');
	// Exibe e retorna o nome de um arquivo aleatório da pasta
	var file_choosed = file_list[Math.floor(Math.random() * file_list.length)];
	console.log('[INFO] Template sorteada: ' + file_choosed);
	return file_choosed;
}

// Sorteia uma source aleatória
function get_source()
{
	// Lê a lista de arquivos dentro da pasta de sources
	var file_list = fs.readdirSync(SOURCE_FOLDER);
	// Exibe e retorna o nome de um arquivo aleatório da pasta
	var file_choosed = file_list[Math.floor(Math.random() * file_list.length)];
	console.log('[INFO] Source sorteada: ' + file_choosed);
	return file_choosed;
}

// Cria o meme
function make_meme()
{
	get_source(); // DEBUG
	get_template(); // DEBUG
}

// Função principal
function main()
{
	console.log('[INFO] Bot iniciado!');
	setInterval(make_meme, 1500); // DEBUG
	// make_meme(); // DEBUG
}

main();