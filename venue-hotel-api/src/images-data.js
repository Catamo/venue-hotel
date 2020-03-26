const path = require("path");
const fs = require("fs");

const HOTEL_IMAGES = [];
const ROOM_IMAGES = [];

//get images
const hotelsPath = path.join(__dirname, "../public/assets/hotels-pics/");
const roomsPath = path.join(__dirname, "../public/assets/rooms-pics/");

fs.readdirSync(hotelsPath).forEach((file) => {
  HOTEL_IMAGES.push(`$/hotels-pics/${file}`);
});

fs.readdirSync(roomsPath).forEach((file) =>{
  ROOM_IMAGES.push(`/rooms-pics/${file}`);
});
//get images end

module.exports = {
    HOTEL_IMAGES,
    ROOM_IMAGES
  };