a = db.restaurant.find(
  {
    borough: "Bronx",
  },
  {},
  {
    skip: 5,
    limit: 5,
  }
);
print(a);
/**
 * [
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
  }
]
 */