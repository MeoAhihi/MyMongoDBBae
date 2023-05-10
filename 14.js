a = db.restaurant.find(
  {
    name: {
      $regex: /^Wil/i,
    },
  },
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbf"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1ab7"),
    borough: 'Bronx',
    cuisine: 'Pizza',
    name: 'Wilbel Pizza',
    restaurant_id: '40871979'
  }
]
 */