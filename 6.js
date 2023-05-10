a = db.restaurant.find(
  {
    borough: "Bronx",
  },
  {},
  {
    limit: 5,
  }
);
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
  }
]
 */
