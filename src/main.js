/* Includes */
// Módulos
const fs = require('fs');

// Outros
const config = require('./config.json'); // Arquivo de config

/* Funções Úteis */
// Gerar aleatório inteiro (com seed) de min para max - 1
function get_random(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

// Gera o arquivo do meme, a partir de um template e um source
function generate_meme()
{
	var template = get_template();
	var source = get_source();
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
setInterval(main, config.time * 60000);