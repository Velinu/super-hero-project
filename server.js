const express = require('express')
const app = express()

const port = 3000
const path = require('path')

const key = '122096341478219250'
const prefix = `https://superheroapi.com/api.php/${key}`

app.use(express.static('src'));
app.use(express.static('_CSS'));
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname, './src/home.html'));
})

app.get('/getHero/:name', async (req, res) =>{
    let data;
    const response = (await fetch(`${prefix}/search/${req.params.name}`))
    data = await response.json()
    if(data.response === 'success'){
        res.send(data.results);
        
    }else{
        res.status(404).send({message: 'Nenhum heroi encontrado'})
    }
})

app.listen(port, () => {
    console.log('Servidor iniciado na porta http://localhost:3000/');
})

module.exports = app