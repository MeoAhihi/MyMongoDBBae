a = db.restaurant.find(
  {
    name: {
      $regex: /mon/i,
    },
  },
  {
    name: 1,
    borough: 1,
    "address.coord": 1,
    cuisine: 1,
  }
);
print(a)
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d36"),
    address: { coord: [ -73.98306099999999, 40.7441419 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: "Desmond'S Tavern"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d3d"),
    address: { coord: [ -73.8221418, 40.7272376 ] },
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Shimons Kosher Pizza'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d4a"),
    address: { coord: [ -74.10465599999999, 40.58834 ] },
    borough: 'Staten Island',
    cuisine: 'American ',
    name: 'Richmond County Country Club'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d7a"),
    address: { coord: [ -73.9812843, 40.5947365 ] },
    borough: 'Brooklyn',
    cuisine: 'Pizza/Italian',
    name: 'Lb Spumoni Gardens'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dcb"),
    address: { coord: [ -73.951199, 40.7166026 ] },
    borough: 'Brooklyn',
    cuisine: 'Italian',
    name: "Bamonte'S Restaurant"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e03"),
    address: { coord: [ -73.924072, 40.76108900000001 ] },
    borough: 'Queens',
    cuisine: 'Greek',
    name: 'Omonia Cafe'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e4f"),
    address: { coord: [ -74.0023353, 40.7333573 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Manhattan Monster'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e7e"),
    address: { coord: [ -74.001094, 40.729583 ] },
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: "Monte'S"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e99"),
    address: { coord: [ -73.9979536, 40.6914024 ] },
    borough: 'Brooklyn',
    cuisine: 'Bottled beverages, including water, sodas, juices, etc.',
    name: 'Montero Bar & Grill'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ea1"),
    address: { coord: [ -73.9901605, 40.7526176 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: "Delmonico'S Kitchen"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1024"),
    address: { coord: [ -73.9707505, 40.7635651 ] },
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: 'Delmonico Gourmet'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc108f"),
    address: { coord: [ -73.9760637, 40.7508686 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Delmonico Gourmet'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc10a9"),
    address: { coord: [ -73.9705633, 40.7605759 ] },
    borough: 'Manhattan',
    cuisine: 'Italian',
    name: 'Montebello Restaurant'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc113f"),
    address: { coord: [ -74.1914658, 40.55274360000001 ] },
    borough: 'Staten Island',
    cuisine: 'Italian',
    name: 'Villa Monte Pizzeria'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc11ea"),
    address: { coord: [ -73.97198209999999, 40.764464 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Harmonie Club'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc12ab"),
    address: { coord: [ -73.79571990000001, 40.7095637 ] },
    borough: 'Queens',
    cuisine: 'Bakery',
    name: "Ramona'S Bakery"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc12dd"),
    address: { coord: [ -73.97852100000001, 40.729192 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: "Mona'S"
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1304"),
    address: { coord: [ -73.98463480000001, 40.7630755 ] },
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Neil Simon Theatre'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1348"),
    address: { coord: [ -73.9938361, 40.6091317 ] },
    borough: 'Brooklyn',
    cuisine: 'Bakery',
    name: 'Mondial Bakery'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1367"),
    address: { coord: [ -74.028486, 40.630438 ] },
    borough: 'Brooklyn',
    cuisine: 'Mediterranean',
    name: 'Omonia Cafe'
  }
]
Type "it" for more
 */