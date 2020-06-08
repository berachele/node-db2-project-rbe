
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
  .insert([
    {carID: 1, buyerName: "Rachele Edwards", amountSoldFor: 3000 },
  ])
};
