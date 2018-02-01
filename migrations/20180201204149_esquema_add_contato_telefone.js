
exports.up = knex => knex.schema.table('contato ', function (table) {
    table.string('telefone');
  })
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("contato")
  }

