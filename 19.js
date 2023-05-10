a = db.restaurant.find(
    {
      borough: {
        $nin: ["Staten Island", "Queens", "Bronxor", "Brooklyn"],
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
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb9"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cba"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'P & S Deli Grocery',
    restaurant_id: '40362264'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbb"),
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc0"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Angelika Film Center',
    restaurant_id: '40362274'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc3"),
    borough: 'Manhattan',
    cuisine: 'Turkish',
    name: 'The Country Cafe',
    restaurant_id: '40362715'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc5"),
    borough: 'Bronx',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40363093'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc6"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Downtown Deli',
    restaurant_id: '40363021'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc9"),
    borough: 'Bronx',
    cuisine: 'Chinese',
    name: 'Happy Garden',
    restaurant_id: '40363289'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cca"),
    borough: 'Manhattan',
    cuisine: 'Bakery',
    name: "Olive'S",
    restaurant_id: '40363151'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ccb"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Cafe Metro',
    restaurant_id: '40363298'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ccd"),
    borough: 'Manhattan',
    cuisine: 'Sandwiches/Salads/Mixed Buffet',
    name: 'Lexler Deli',
    restaurant_id: '40363426'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cd1"),
    borough: 'Manhattan',
    cuisine: 'Continental',
    name: "Lorenzo & Maria'S",
    restaurant_id: '40363630'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cd2"),
    borough: 'Manhattan',
    cuisine: 'Pizza',
    name: "Domino'S Pizza",
    restaurant_id: '40363644'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cd3"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Berkely',
    restaurant_id: '40363685'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cd5"),
    borough: 'Manhattan',
    cuisine: 'Pizza',
    name: "Domino'S Pizza",
    restaurant_id: '40363945'
  }
]
Type "it" for more
   */