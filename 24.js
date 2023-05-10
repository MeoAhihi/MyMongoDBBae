a = db.restaurant.find(
  {
    "address.coord.1": {
      $gt: 42,
      $lte: 52,
    },
  },
  {
    restaurant_id: 1,
    name: 1,
    address: 1,
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f45"),
    address: {
      building: '47',
      coord: [ -78.877224, 42.89546199999999 ],
      street: 'Broadway @ Trinity Pl',
      zipcode: '10006'
    },
    name: "T.G.I. Friday'S",
    restaurant_id: '40387990'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f73"),
    address: {
      building: '1',
      coord: [ -0.7119979, 51.6514664 ],
      street: 'Pennplaza E, Penn Sta',
      zipcode: '10001'
    },
    name: 'T.G.I. Fridays',
    restaurant_id: '40388936'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc11ce"),
    address: {
      building: '3000',
      coord: [ -87.86567699999999, 42.61150920000001 ],
      street: '47 Avenue',
      zipcode: '11101'
    },
    name: "Di Luvio'S Deli",
    restaurant_id: '40402284'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1403"),
    address: {
      building: '21972199',
      coord: [ -78.589606, 42.8912372 ],
      street: 'Broadway',
      zipcode: '10024'
    },
    name: 'La Caridad 78',
    restaurant_id: '40568285'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1acf"),
    address: {
      building: '7981',
      coord: [ -84.9751215, 45.4713351 ],
      street: 'Hoyt Street',
      zipcode: '11201'
    },
    name: "Bijan'S",
    restaurant_id: '40876618'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1ae7"),
    address: {
      building: '0',
      coord: [ -88.0778799, 42.4154769 ],
      street: '& Grand Central',
      zipcode: '10017'
    },
    name: 'Hyatt, Ny Central/Room Service',
    restaurant_id: '40879243'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1b03"),
    address: {
      building: '60',
      coord: [ -111.9975205, 42.0970258 ],
      street: 'West Side Highway',
      zipcode: '10006'
    },
    name: 'Sports Center At Chelsea Piers (Sushi Bar)',
    restaurant_id: '40882356'
  }
]
 */