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

module.exports = { Traveler, Location, Trips };
