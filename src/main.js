/* Includes */
const config = require('./config.json'); // Arquivo de config
const fs = require('fs');
const path = require('path')

/* Funções Úteis */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFile(dir, exts, cb){
    fs.readdir(dir, (err, files) => {
        if(err){
            return cb(nil, err);
        }
        let f = files.filter((file) => {
            let spt = file.split('.');
            let ext = spt[spt.length-1];
            if(exts.indexOf(ext) > -1)
                return true
            else
                return false
        });
        let index = getRandomInt(0, f.length-1);
        cb(f[index], null);
    });
}

// Função que gera a imagem a partir de um template + source
function gera_imagem() {
	
	getRandomFile('./templates', ['png', 'jpg', 'jpeg'], (files, err) => {
		var template_config = require('./templates/' + path.basename(files, path.extname(files)) + '.json');
		console.log('./templates/' + files);
		console.log('./templates/' + path.basename(files, path.extname(files)) + '.json');
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
setInterval(principal, config.tempo * 60000);

