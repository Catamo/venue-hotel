import {
  AMENITIES_MAP,
  PRICE_CATEGORY_MAP
} from './hotelPropertiesValuesTitles'

export default {
  amenities: {
    title: 'Amenities',
    options: Object.keys(AMENITIES_MAP).map((k) => ({
      title: AMENITIES_MAP[k],
      value: k
    }))
  },
  distance_to_venue: {
    title: 'Distance to Venue',
    options: [
      { title: 'Less than 1 km', value: 1000 },
      { title: 'Less than 3 km', value: 3000 },
      { title: 'Less than 5 km', value: 5000 }
    ]
  },
  price_category: {
    title: 'Price Category',
    options: Object.keys(PRICE_CATEGORY_MAP).map((k) => ({
      title: PRICE_CATEGORY_MAP[k],
      value: k
    }))
  },
  rating: {
    title: 'Rating',
    options: [
      { title: '1 out of 5', value: 1 },
      { title: '2 out of 5', value: 2 },
      { title: '3 out of 5', value: 3 },
      { title: '4 out of 5', value: 4 },
      { title: '5 out of 5', value: 5 }
    ]
  }
}
