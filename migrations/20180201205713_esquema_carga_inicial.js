const contato = [
    {  nomecontato: "Joao" ,  telefone: "2345678" },
    {  nomecontato: "Pedro" , telefone: "52167889"  },
    {  nomecontato:"Milena" , telefone: "333355555" }
]


exports.up = knex => knex("contato").insert(contato)
  
exports.down = knex => knex("contato").del()
    .whereIn("nomecontato", contato.map(e => e.nomecontato))
