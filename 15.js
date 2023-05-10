a = db.restaurant.find(
  {
    name: {
      $regex: /ces$/i,
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
    _id: ObjectId("645a2908bb31ded6e1dc1139"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Pieces',
    restaurant_id: '40399910'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc11f7"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'S.M.R Restaurant Services',
    restaurant_id: '40403857'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc120e"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Good Shepherd Services',
    restaurant_id: '40403989'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc16ae"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: "The Ice Box-Ralph'S Famous Italian Ices",
    restaurant_id: '40690899'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc18b0"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Alices',
    restaurant_id: '40782042'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1aca"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Re: Sources',
    restaurant_id: '40876068'
  }
]
   */
