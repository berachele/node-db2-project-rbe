
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .insert([
      {VIN: "1HGBH41JXMN109186", make: "Jeep", model: "Cherokee", mileage: 0},
      {VIN: "1RJBJ41JXMN109199", make: "Chevrolet", model: "Cruze", mileage: 1000},
      {VIN: "1DERL41JXMN109111", make: "Subaru", model: "Outback", mileage: 15000},
      {VIN: "1FGHJ41JXMN109109", make: "Kia", model: "Soul", mileage: 200000},
    ])
};
