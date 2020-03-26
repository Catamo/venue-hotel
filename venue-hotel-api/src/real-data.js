const realData = require("../real-data-db");

function generateHotels() {
  return { hotels: realData.hotels, rooms: realData.rooms, bookings: [] };
}

module.exports = generateHotels;
