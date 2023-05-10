a = db.restaurant.find(
  {
    $or: [
      {
        cuisine: {
          $nin: ["American ", "Chinese"],
        },
      },
      {
        name: {
          $regex: /^Wil/i,
        },
      },
    ],
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
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cab"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb0"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb1"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb2"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb3"),
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb4"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbb"),
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbc"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbd"),
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbe"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbf"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: "Wilken'S Fine Food",
    restaurant_id: '40356483'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc1"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: 'White Castle',
    restaurant_id: '40362344'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc3"),
    borough: 'Manhattan',
    cuisine: 'Turkish',
    name: 'The Country Cafe',
    restaurant_id: '40362715'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc4"),
    borough: 'Brooklyn',
    cuisine: 'Caribbean',
    name: "Shashemene Int'L Restaura",
    restaurant_id: '40362869'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc5"),
    borough: 'Bronx',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40363093'
  }
]
Type "it" for more
 */