const mergeImages = require('merge-images');
const Canvas = require('canvas');
var base64Img = require('base64-img');

// Função que gera a imagem a partir de um template + source
function gera_imagem(cb) {
	let path = '/home/phantom/Code/merdapostbot/images/';
	var optionalObj = {'fileName': 'merged.png', 'type':'png'};
	mergeImages(['/home/phantom/Code/merdapostbot/images/body.png', 
	'/home/phantom/Code/merdapostbot/images/eyes.png', 
	'/home/phantom/Code/merdapostbot/images/mouth.png'], {
		Canvas: Canvas
	}).then(b64 => {
		
	});
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

