a = db.restaurant.find({ borough: "Bronx" });
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-03-03T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-09-11T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2013-01-24T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-11-23T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-03-10T00:00:00.000Z"),
        grade: 'B',
        score: 14
      }
    ],
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-28T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-06-19T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2012-06-15T00:00:00.000Z"),
        grade: 'A',
        score: 3
      }
    ],
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc5"),
    address: {
      building: '1006',
      coord: [ -73.84856870000002, 40.8903781 ],
      street: 'East 233 Street',
      zipcode: '10466'
    },
    borough: 'Bronx',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    grades: [
      {
        date: ISODate("2014-04-24T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-09-05T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-02-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-07-03T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-07-11T00:00:00.000Z"),
        grade: 'A',
        score: 5
      }
    ],
    name: 'Carvel Ice Cream',
    restaurant_id: '40363093'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc9"),
    address: {
      building: '1236',
      coord: [ -73.8893654, 40.81376179999999 ],
      street: '238 Spofford Ave',
      zipcode: '10474'
    },
    borough: 'Bronx',
    cuisine: 'Chinese',
    grades: [
      {
        date: ISODate("2013-12-30T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-01-08T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-06-12T00:00:00.000Z"),
        grade: 'B',
        score: 15
      }
    ],
    name: 'Happy Garden',
    restaurant_id: '40363289'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cdc"),
    address: {
      building: '277',
      coord: [ -73.8941893, 40.8634684 ],
      street: 'East Kingsbridge Road',
      zipcode: '10458'
    },
    borough: 'Bronx',
    cuisine: 'Chinese',
    grades: [
      {
        date: ISODate("2014-03-03T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-09-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-03-19T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-08-29T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-08-17T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'Happy Garden',
    restaurant_id: '40364296'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ce1"),
    address: {
      building: '658',
      coord: [ -73.81363999999999, 40.82941100000001 ],
      street: 'Clarence Ave',
      zipcode: '10465'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-21T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2012-07-11T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Manhem Club',
    restaurant_id: '40364363'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d09"),
    address: {
      building: '2222',
      coord: [ -73.84971759999999, 40.8304811 ],
      street: 'Haviland Avenue',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-12-18T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-05-01T00:00:00.000Z"),
        grade: 'B',
        score: 17
      },
      {
        date: ISODate("2013-03-14T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-09-20T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-02-08T00:00:00.000Z"),
        grade: 'B',
        score: 19
      }
    ],
    name: 'The New Starling Athletic Club Of The Bronx',
    restaurant_id: '40364956'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d11"),
    address: {
      building: '72',
      coord: [ -73.92506, 40.8275556 ],
      street: 'East  161 Street',
      zipcode: '10451'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-04-15T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-11-14T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2013-07-29T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-12-31T00:00:00.000Z"),
        grade: 'B',
        score: 15
      },
      {
        date: ISODate("2012-05-30T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-09T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-08-15T00:00:00.000Z"),
        grade: 'C',
        score: 37
      }
    ],
    name: 'Yankee Tavern',
    restaurant_id: '40365499'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d23"),
    address: {
      building: '331',
      coord: [ -73.87786539999999, 40.8724377 ],
      street: 'East  204 Street',
      zipcode: '10467'
    },
    borough: 'Bronx',
    cuisine: 'Irish',
    grades: [
      {
        date: ISODate("2014-08-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-03-26T00:00:00.000Z"),
        grade: 'B',
        score: 23
      },
      {
        date: ISODate("2013-09-11T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-12-18T00:00:00.000Z"),
        grade: 'B',
        score: 27
      },
      {
        date: ISODate("2011-10-20T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'Mcdwyers Pub',
    restaurant_id: '40365893'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d3a"),
    address: {
      building: '5820',
      coord: [ -73.9002615, 40.885186 ],
      street: 'Broadway',
      zipcode: '10463'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-02-26T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-10-09T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2013-05-15T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-11-20T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2011-10-17T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-06-22T00:00:00.000Z"),
        grade: 'C',
        score: 35
      }
    ],
    name: 'The Punch Bowl',
    restaurant_id: '40366497'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d46"),
    address: {
      building: '21',
      coord: [ -73.9168424, 40.8401362 ],
      street: 'East  170 Street',
      zipcode: '10452'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-12-16T00:00:00.000Z"),
        grade: 'B',
        score: 22
      },
      {
        date: ISODate("2014-08-12T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-03-03T00:00:00.000Z"),
        grade: 'B',
        score: 22
      },
      {
        date: ISODate("2013-08-29T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-08-29T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-02-13T00:00:00.000Z"),
        grade: 'B',
        score: 16
      }
    ],
    name: 'Munchtime',
    restaurant_id: '40366748'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d47"),
    address: {
      building: '4340',
      coord: [ -73.8194559, 40.8899176 ],
      street: 'Boston Road',
      zipcode: '10475'
    },
    borough: 'Bronx',
    cuisine: 'Pancakes/Waffles',
    grades: [
      {
        date: ISODate("2014-09-22T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2014-05-16T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-10-30T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-06-05T00:00:00.000Z"),
        grade: 'B',
        score: 24
      },
      {
        date: ISODate("2012-05-14T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-04T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: 'Ihop',
    restaurant_id: '40366833'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d4c"),
    address: {
      building: '1191',
      coord: [ -73.8513114, 40.8316981 ],
      street: 'Castle Hill Avenue',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Café/Coffee/Tea',
    grades: [
      {
        date: ISODate("2014-07-03T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-07-08T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-02-11T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-08-14T00:00:00.000Z"),
        grade: 'B',
        score: 14
      },
      {
        date: ISODate("2011-08-23T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: "Lulu'S Coffee Shop",
    restaurant_id: '40366938'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d77"),
    address: {
      building: '2894',
      coord: [ -73.815175, 40.8137649 ],
      street: 'Schurz Ave',
      zipcode: '10465'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-10-31T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2014-02-20T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2013-06-07T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-05-17T00:00:00.000Z"),
        grade: 'A',
        score: 2
      }
    ],
    name: 'Marina Delray',
    restaurant_id: '40367161'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d78"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'African',
    grades: [
      {
        date: ISODate("2014-05-21T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-06-01T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2012-06-12T00:00:00.000Z"),
        grade: 'A',
        score: 0
      },
      {
        date: ISODate("2011-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 0
      }
    ],
    name: 'African Terrace',
    restaurant_id: '40368021'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d79"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-21T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-05-22T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-05-17T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 5
      }
    ],
    name: 'Cool Zone',
    restaurant_id: '40368022'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d7b"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-21T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-05-29T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-06-15T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2011-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 0
      }
    ],
    name: 'Beaver Pond',
    restaurant_id: '40368025'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d7d"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-21T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-05-28T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2012-06-18T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2011-06-07T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'African Market (Baboon Cafe)',
    restaurant_id: '40368026'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d8c"),
    address: {
      building: '4280',
      coord: [ -73.86697, 40.89794699999999 ],
      street: 'Katonah Ave',
      zipcode: '10470'
    },
    borough: 'Bronx',
    cuisine: 'Not Listed/Not Applicable',
    grades: [
      {
        date: ISODate("2014-06-04T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-06-07T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2012-06-27T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2011-07-13T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: "The Lark'S Nest",
    restaurant_id: '40367946'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d8d"),
    address: {
      building: '2300',
      coord: [ -73.8786113, 40.8502883 ],
      street: 'Southern Boulevard',
      zipcode: '10460'
    },
    borough: 'Bronx',
    cuisine: 'Café/Coffee/Tea',
    grades: [
      {
        date: ISODate("2014-05-21T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-05-29T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-06-18T00:00:00.000Z"),
        grade: 'A',
        score: 8
      }
    ],
    name: 'Terrace Cafe',
    restaurant_id: '40368018'
  }
]
Type "it" for more
 */