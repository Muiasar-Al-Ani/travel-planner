const Traveler = require("./Traveler");
const Location = require("./Location");
const Trips = require("./Trips");

Traveler.hasMany(Trips, {
  foreignKey: "traveler_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Traveler, {
  foreignKey: "traveler_id",
});

Location.hasMany(Trips, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

Trips.belongsTo(Location, {
  foreignKey: "location_id",
});



// Traveler.belongsToMany(Location, { 
//   through: Trips, 
//   foreignKey: "traveler_id",
//   onDelete: "CASCADE",
//   unique: false,
// });



// Location.belongsToMany(Traveler, { 
//   through: Trips,
//   foreignKey: "location_id",
//   onDelete: "CASCADE",
//   unique: false,
// });

module.exports = { Traveler, Location, Trips };
