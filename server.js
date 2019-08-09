const express = require('express')
const data = require('./data.json')

const app = express()

app.use(express.json())

app.get("/clients", function(req, res){
    res.json(data);
});

app.get("/clients:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id = id)
    
    if(!client)
        res.status(204).json()
    else
        res.json(client)
});

app.post("/clients", function(req, res){
    const { name, email } = req.params

    // Rotinas para salvar cliente

    res.json({name, email})
});

app.delete("/clients/:id", function(req,res){
    const {id} = req.params;
    const clientFiltered = data.filter(client => client.id != id)

    res.json(clientFiltered)
});

app.put("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id = id)
    
    if(!client)
        res.status(204).json()
    else{
        const {name} = req.body
        client.name = name
        res.json(client)
    }
});

app.listen(4000, () => {
    console.log('Server running on port 4000.')
})