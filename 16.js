a = db.restaurant.find(
  {
    name: {
      $regex: /Reg/i,
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
    _id: ObjectId("645a2908bb31ded6e1dc0caa"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dac"),
    borough: 'Manhattan',
    cuisine: 'Café/Coffee/Tea',
    name: 'Caffe Reggio',
    restaurant_id: '40369418'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0eb5"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regency Hotel',
    restaurant_id: '40382679'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc11d6"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regency Whist Club',
    restaurant_id: '40402377'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc12b7"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Rego Park Cafe',
    restaurant_id: '40523342'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1926"),
    borough: 'Queens',
    cuisine: 'Pizza',
    name: 'Regina Pizza',
    restaurant_id: '40801325'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1b41"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Regal Entertainment Group',
    restaurant_id: '40891782'
  }
]
   */
