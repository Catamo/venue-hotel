const realData = require("../real-data-db");
const serverPath = `http://localhost:${process.env.PORT}/assets/`;

function generateHotels() {
  const hotels = realData.hotels.map(h => ({
    ...h,
    images: h.images.map(i => serverPath + i)
  }));

  const rooms = realData.rooms.map(r => ({
    ...r,
    image: serverPath + r.image
  }));

  return { hotels: hotels, rooms: rooms, bookings: [] };
}

module.exports = generateHotels;
