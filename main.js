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
	
}

// Sorteia uma source aleatória
function get_source()
{
	var file_list = fs.readdirSync(SOURCE_FOLDER); // Lê a lista de arquivos dentro da pasta de sources
	return file_list[Math.floor(Math.random() * file_list.length)]; // Retorna o nome de um arquivo aleatório da pasta
}

// Cria o meme
function make_meme()
{
	
}

// Função principal
function main()
{
	make_meme();
}