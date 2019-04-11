/* MÓDULOS */
const fs = require('fs');
const path = require('path');

/* VARIÁVEIS */

// Constantes
const TEMPLATE_FOLDER = './templates';
const SOURCE_FOLDER = './sources';
const MEME_FOLDER = './memes'; // Output folder

/* FUNÇÕES ÚTEIS */


/* FUNÇÕES PRINCIPAIS */

// Sorteia um template aleatório
/* function get_template()
{
	// Lê a lista de arquivos dentro da pasta de sources
	var file_list = fs.readdirSync(TEMPLATE_FOLDER);
	// Exibe e retorna o nome de um arquivo aleatório da pasta
	var file_choosed = file_list[Math.floor(Math.random() * file_list.length)];
	while (path.extname(file_choosed).toLowerCase() !== '.json')
	{
		file_choosed = file_list[Math.floor(Math.random() * file_list.length)];
	}
	console.log('[INFO] Template sorteada: ' + file_choosed);
	return file_choosed;
} */

function get_template()
{
	// Lê a lista de arquivos dentro da pasta de sources (já filtrando os arquivos .json
	var file_list = fs.readdirSync(TEMPLATE_FOLDER).filter(function(f){return path.extname(f).toLowerCase() === '.json';});
	// Exibe e retorna o nome de um JSON aleatório da pasta
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
	var template_json = get_template();
	var template_image = template_json.replace("json", "png");
	// get image
	// insert json data into image
}

// Função principal
function main()
{
	console.log('[INFO] Bot iniciado!');
	setInterval(make_meme, 1500); // DEBUG
	// make_meme(); // DEBUG
}

main();