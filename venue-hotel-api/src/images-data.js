const path = require("path");
const fs = require("fs");

const HOTEL_IMAGES = [];
const ROOM_IMAGES = [];

//get images
const hotelsPath = path.join(__dirname, "../public/assets/hotels-pics/");
const roomsPath = path.join(__dirname, "../public/assets/rooms-pics/");
const serverPath = `http://localhost:${process.env.PORT}/assets`;

fs.readdirSync(hotelsPath).forEach((file) => {
  HOTEL_IMAGES.push(`${serverPath}/hotels-pics/${file}`);
});

fs.readdirSync(roomsPath).forEach((file) =>{
  ROOM_IMAGES.push(`${serverPath}/rooms-pics/${file}`);
});
//get images end

module.exports = {
    HOTEL_IMAGES,
    ROOM_IMAGES
  };