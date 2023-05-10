a = db.restaurant.find(
  {
    name: {
      $regex: /^Mad/i,
    },
  },
  {
    name: 1,
    borough: 1,
    "address.coord": 1,
    cuisine: 1,
  }
);
print(a);
/**
   * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc11df"),
    address: { coord: [ -73.9860597, 40.7431194 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Madison Square'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc12ad"),
    address: { coord: [ -73.98302199999999, 40.742313 ] },
    borough: 'Manhattan',
    cuisine: 'Indian',
    name: 'Madras Mahal'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc155f"),
    address: { coord: [ -74.000002, 40.72735 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Madame X'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc160e"),
    address: { coord: [ -73.98171959999999, 40.7499406 ] },
    borough: 'Manhattan',
    cuisine: 'French',
    name: 'Madison Bistro'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1696"),
    address: { coord: [ -73.9717845, 40.6897199 ] },
    borough: 'Brooklyn',
    cuisine: 'African',
    name: 'Madiba'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc199c"),
    address: { coord: [ -73.9040753, 40.9069011 ] },
    borough: 'Bronx',
    cuisine: 'Italian',
    name: "Madison'S"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1a17"),
    address: { coord: [ -73.9886598, 40.7565811 ] },
    borough: 'Manhattan',
    cuisine: 'Hotdogs',
    name: "Madame Tussaud'S"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1a57"),
    address: { coord: [ -73.95623719999999, 40.7761697 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Mad River Bar & Grille'
  }
]
   */
