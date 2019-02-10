const mergeImages = require('merge-images');
const Canvas = require('canvas');
var base64Img = require('base64-img');

// Função que gera a imagem a partir de um template + source
function gera_imagem(images, dstpath, name, cb) {
	mergeImages(images, {
		Canvas: Canvas
	}).then(b64 => {
		base64Img.img(b64, dstpath, name, (err, fpath) => {
			if(err){
				cb(nil);
				return;
			}
			return(fpath);
		});
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
	/*
	 * Formato da função:
	 * gera_image(<lista do caminho das imagens>, <caminho onde a imagem será salva>, <nome da imagem que será salva>, <callback>)
	 */
	gera_imagem([''], '', '', (fname) => {
		console.log(fname)
	});
	posta_facebook();
	posta_twitter();
}

// Loop principal do script (minutos * 60000 = milisegundos)
principal();

