const faker = require("faker");
const { PRICE_CATEGORIES, AMENITIES } = require("./constant-data");
const { HOTEL_IMAGES, ROOM_IMAGES } = require("./images-data");

function generateHotels() {
  var hotels = [];
  var rooms = [];

  for (let i = 0; i < 6; i++) {
    hotelId = faker.random.uuid();

    hotels.push({
      id: hotelId,
      name: faker.random.words(3),
      description: faker.lorem.paragraphs(4),
      distance_to_venue: faker.random.number({ min: 500, max: 4000 }),
      rating: faker.random.number({ min: 1, max: 5 }),
      price_category: faker.random.arrayElement(PRICE_CATEGORIES),
      amenities: selectMultipleRandomFromArray(AMENITIES),
      images: selectMultipleRandomFromArray(HOTEL_IMAGES)
    });

    let roomsCount = faker.random.number({ min: 2, max: 6 });

    for (let j = 0; j < roomsCount; j++) {
      rooms.push({
        id: faker.random.uuid(),
        name: faker.random.words(3),
        description: faker.lorem.sentences(15),
        image: faker.random.arrayElement(ROOM_IMAGES),
        max_occupancy: faker.random.number({ min: 1, max: 4 }),
        price_in_usd: faker.random.number({ min: 50, max: 200 }),
        hotelId: hotelId
      });
    }
  }
  return { hotels: hotels, rooms: rooms, bookings: [] };

  function selectMultipleRandomFromArray(array) {
    var resultKeys = {};
    for (var i = 0; i < array.length; i++) {
      var current = faker.random.arrayElement(array);

      if (resultKeys.hasOwnProperty(current) === false) {
        resultKeys[current] = current;
      }
    }

    return Object.keys(resultKeys);
  }
}

module.exports = generateHotels;
