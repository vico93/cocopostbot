/* CONFIG */
const config = require('./config.json');

// Função que gera a imagem a partir de um template + source
function gera_imagem() {
	// console.log('Cant stop me now!');
	
	var imagem = require('./templates/drake_posting_meme_template_by_josael281999_dblbmu0.png');
	var imagem_cfg = require('./templates/drake_posting_meme_template_by_josael281999_dblbmu0.json');

}

// Posta o conteúdo no Facebook
function posta_facebook()
{
	console.log("FB: A ser implementado!");
}

// Posta o conteúdo no Twitter
function posta_twitter()
{
	console.log("TT: A ser implementado!");
}

// Função principal: gera a imagem aleatória, posta no facebook e no Twitter e depois apaga ela para o próximo round.
function principal()
{
	gera_imagem();
	posta_facebook();
	posta_twitter();
}

// Loop principal do script (minutos * 60000 = milisegundos)
principal();
setInterval(principal, config.tempo * 60000);

