// index2.js
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public2"))

app.use(morgan("dev"))

app.use(bodyParser.urlencoded())

app.get("/listproduts", (req, res) => {
  knex("produto").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })  
})

app.post("/addproduto", (req, res) => {
  const produto = req.body
  knex("produto").insert(produto, "idproduto").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ => 
  app.listen(3000, _ => 
    console.log("server online!")))