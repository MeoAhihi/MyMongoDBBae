a = db.restaurant.find(
  {
    borough: {
      $in: ["Staten Island", "Queens", "Bronxor", "Brooklyn"],
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
    _id: ObjectId("645a2908bb31ded6e1dc0ca7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca8"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caa"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cab"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cae"),
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caf"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
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
    _id: ObjectId("645a2908bb31ded6e1dc0cb5"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
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
    _id: ObjectId("645a2908bb31ded6e1dc0cc2"),
    borough: 'Queens',
    cuisine: 'Chinese',
    name: 'Ho Mei Restaurant',
    restaurant_id: '40362432'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc4"),
    borough: 'Brooklyn',
    cuisine: 'Caribbean',
    name: "Shashemene Int'L Restaura",
    restaurant_id: '40362869'
  }
]
 */