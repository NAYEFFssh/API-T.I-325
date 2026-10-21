require('dotenv').config(); //carrega as variasveis di arquivo .env para o process.env
const express = require('express');
const app = express();
app.use(express.json());
 
// rota ou enpoint
app.get('/', (req, res) => {
    return res.json({mensagem: 'API TI-325 rodando...'});
})
 
app.get('/ping', (req, res) => {
    return res.json({mensagem: 'ping pong'});
})
 
app.post('/usuario', (req,res) => {
    const {nome,idade}= req.body;
    
    //Transformação
    //1. Converter para maiuscula
    //2. Calcula o ano aproximado do nascimento
    //3. Adiciona um status personalizado

    const nomeFormatado = nome ? nome.toUpperCase() : 'NAO INFORMADO';
    const anoNacimento = new Date().getFullYear() - idade; 

    return res.json ({
        mensagem: 'Dados recebidos e processados com sucesso',
        dadosOriginais: {nome, idade},
        dadosProcessados:{
            nomeFormatado,
            idade,
            anoNacimentoAproximado: anoNacimento,
            perfil: idade >= 18 ? 'adulto' : 'adolecente'
        }
    })
})
 
const PORT = process.env.PORT;
app.listen(PORT, () => {
    //console.log('servidor rodando em http://localhost:3000')
    console.log(`servidor rodando em http://localhost: ${PORT}`);
 
})