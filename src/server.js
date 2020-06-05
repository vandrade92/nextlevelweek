const express = require("express")
const server = express()

//Configurar pasta public
server.use(express.static("public"))

//Utilizando Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//Configurar Routas.

//Página Inicial
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html",{
        title: "Um título"
    })
})

server.get("/create", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//Ligar o servidor.
server.listen(3000)