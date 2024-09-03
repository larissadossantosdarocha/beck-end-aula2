//importações
const express = require("express");
const porta = 3000;

//corpo / re(requisição) 
//res(resposta)
const raiz = (req, res) =>{
    res.send("Back-end Ativo")
}

//configurar o hhtp
const app = express();
app.get("/", raiz);

//teste no console 
app.listen(3000, ()=>{
    console.log("Respondendo na porta:", porta);
})