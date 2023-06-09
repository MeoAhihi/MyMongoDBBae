a = db.restaurant.find({
  "address.coord": {
    $lt: -95.754168,
  },
});
print(a)
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc12ea"),
    address: {
      building: '3707',
      coord: [ -101.8945214, 33.5197474 ],
      street: '82 Street',
      zipcode: '11372'
    },
    borough: 'Queens',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-04T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-11-07T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2013-05-17T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-08-29T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-04-03T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-11-16T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: 'Burger King',
    restaurant_id: '40534067'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1658"),
    address: {
      building: '15259',
      coord: [ -119.6368672, 36.2504996 ],
      street: '10 Avenue',
      zipcode: '11357'
    },
    borough: 'Queens',
    cuisine: 'Italian',
    grades: [
      {
        date: ISODate("2014-09-04T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2014-03-26T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-03-04T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-09-27T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-04-20T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2011-11-23T00:00:00.000Z"),
        grade: 'C',
        score: 34
      }
    ],
    name: "Cascarino'S",
    restaurant_id: '40668681'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1b03"),
    address: {
      building: '60',
      coord: [ -111.9975205, 42.0970258 ],
      street: 'West Side Highway',
      zipcode: '10006'
    },
    borough: 'Manhattan',
    cuisine: 'Japanese',
    grades: [
      {
        date: ISODate("2014-03-20T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-06-28T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-07-05T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-07-27T00:00:00.000Z"),
        grade: 'A',
        score: 2
      }
    ],
    name: 'Sports Center At Chelsea Piers (Sushi Bar)',
    restaurant_id: '40882356'
  }
]
 */