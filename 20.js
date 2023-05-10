a = db.restaurant.find(
  {
    "grades.score": {
      $not: {
        $gt: 10,
      },
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
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caf"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cbe"),
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc1"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: 'White Castle',
    restaurant_id: '40362344'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cd4"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: "Sonny'S Heros",
    restaurant_id: '40363744'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ce1"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Manhem Club',
    restaurant_id: '40364363'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cf0"),
    borough: 'Staten Island',
    cuisine: 'American ',
    name: 'Great Kills Yacht Club',
    restaurant_id: '40364610'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cfe"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'White Horse Tavern',
    restaurant_id: '40364958'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d04"),
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: "Dorrian'S Red Hand Restaurant",
    restaurant_id: '40365239'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d07"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Serendipity 3',
    restaurant_id: '40364863'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d6c"),
    borough: 'Manhattan',
    cuisine: 'Mexican',
    name: 'Mexico Lindo Restaurant',
    restaurant_id: '40367038'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d76"),
    borough: 'Brooklyn',
    cuisine: 'Greek',
    name: 'El Greco Diner',
    restaurant_id: '40367795'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d78"),
    borough: 'Bronx',
    cuisine: 'African',
    name: 'African Terrace',
    restaurant_id: '40368021'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d7c"),
    borough: 'Staten Island',
    cuisine: 'Italian',
    name: 'Roadhouse Restaurant',
    restaurant_id: '40368034'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d7d"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'African Market (Baboon Cafe)',
    restaurant_id: '40368026'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d8c"),
    borough: 'Bronx',
    cuisine: 'Not Listed/Not Applicable',
    name: "The Lark'S Nest",
    restaurant_id: '40367946'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d8d"),
    borough: 'Bronx',
    cuisine: 'Café/Coffee/Tea',
    name: 'Terrace Cafe',
    restaurant_id: '40368018'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0da4"),
    borough: 'Manhattan',
    cuisine: 'French',
    name: 'Pergola Des Artistes',
    restaurant_id: '40369139'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0db6"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: 'White Castle',
    restaurant_id: '40369676'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dbe"),
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Mcdonald'S",
    restaurant_id: '40369535'
  }
]
Type "it" for more
 */