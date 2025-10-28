// Importa o módulo 'express', que é um framework para construir aplicações web em Node.js.
const express = require('express');
// Importa o módulo 'path' para trabalhar com caminhos de arquivos e diretórios. (Embora não esteja sendo usado diretamente na versão final, é comumente importado).
const path = require('path');
// Cria uma instância da aplicação Express.
const app = express();
// Define a porta em que o servidor irá escutar.
const port = 3002;

// O middleware estático serve os arquivos estáticos (HTML, CSS, JavaScript, imagens, etc.) a partir
// do diretório onde o script do servidor está sendo executado (__dirname).
// Isso inclui servir o 'index.html' automaticamente quando a raiz ('/') for acessada.
app.use(express.static(__dirname));

// A linha 'Remova a rota app.get('/') que enviava o arquivo index.html, pois ela é redundante.'
// é um comentário para indicar que a rota manual foi removida, pois a linha 'app.use(express.static(__dirname));'
// já cuida de servir o 'index.html' automaticamente.

// Inicia o servidor e o faz escutar na porta definida.
app.listen(port, () => {
  // Exibe uma mensagem no console quando o servidor estiver pronto e rodando.
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});


