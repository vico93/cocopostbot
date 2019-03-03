/* Includes */
// Módulos
const fs = require('fs');

// Outros
const config = require('./config.json'); // Arquivo de config

/* Funções Úteis */
// Gerar aleatório inteiro (com seed) de min para max - 1
function random_int(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

// Seleciona um arquivo aleatório de uma pasta, e retorna o caminho completo
function random_file(path)
{
	var dir = fs.readdirSync(path); // Lê todos os nomes de arquivos em um array
	var filename = dir[Math.floor(Math.random() * dir.length)]; // Seleciona um nome aleatório
	
	console.log('[INFO] Selecionei o arquivo ' + filename + ' para processamento!');
	
	return path + '/' + filename; // Retorna com caminho + nome do arquivo
}

// Gera o arquivo do meme, a partir de um template e um source
function generate_meme()
{
	// Objeto com propriedades do template
	let buffer = fs.readFileSync(random_file('./templates'), "utf8"); //(random_file('./templates')); // Incorpora um JSON aleatório com descrição do template.
	let template = JSON.parse(buffer)
	for(let i = 0; i < template["areas"].length; i++) {
		console.log("x1:", template["areas"][i].x1)
		console.log("y1:", template["areas"][i].y1)
		console.log("x2:", template["areas"][i].x2)
		console.log("y2:", template["areas"][i].y2)
	}
	
}

// Remove o arquivo temporário do meme
function delete_meme()
{
	fs.unlinkSync('./output.png', (err) => {
		if (err) throw err;
		console.log('[INFO] O meme criado foi apagado!');
	});
}


/* Função Principal */
function main()
{
	generate_meme();
	// post_media('facebook');
	// post_media('twitter');
	// post_media('discord');
	// delete_meme();
}

/* Processo Principal */
// Loop principal do script (minutos * 60000 = milisegundos)
console.log('[INFO] Inicializando......');
main();
// setInterval(main, config.time * 60000);
setInterval(main, 10000); // DEBUG