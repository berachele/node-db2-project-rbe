
exports.up = function(knex) {
  return knex.schema.createTable("sales", table => {
      table.increments("id")
      table.integer("carID").references("cars.id")
      table.text("buyerName", 128).notNullable()
      table.integer("amountSoldFor").notNullable()
      table.timestamp("date_sold").defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales")
};
