require('dotenv').config(); //carrega as variasveis di arquivo .env para o process.env
const express = require('express');
const app = express();

// rota ou enpoint
                // request, response
app.get('/ping', (req, res) => {
    return res.json({mensagem: 'pong'});
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    //console.log('servidor rodando em http://localhost:3000')
    console.log(`servidor rodando em http://localhost: ${PORT}`); //para usar variavel tem que usar crase ``
})
