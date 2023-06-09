a = db.restaurant.find(
  {
    borough: "Bronx",
    cuisine: {
      $in: ["American ", "Chinese"],
    },
  }
);
print(a);
/**
 * [
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
    _id: ObjectId("645a2908bb31ded6e1dc0da0"),
    address: {
      building: '3533',
      coord: [ -73.9100082, 40.8863835 ],
      street: 'Johnson Avenue',
      zipcode: '10463'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-02-20T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-09-09T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-03-26T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-03-08T00:00:00.000Z"),
        grade: 'P',
        score: 2
      },
      {
        date: ISODate("2012-09-26T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-04-13T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-07-26T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-02-26T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'Blue Bay Restaurant',
    restaurant_id: '40369087'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dbd"),
    address: {
      building: '2375',
      coord: [ -73.85534559999999, 40.8426433 ],
      street: 'East Tremont Avenue',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-10-14T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-04-08T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-11-04T00:00:00.000Z"),
        grade: 'C',
        score: 45
      },
      {
        date: ISODate("2013-05-23T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-10-18T00:00:00.000Z"),
        grade: 'B',
        score: 15
      },
      {
        date: ISODate("2012-10-05T00:00:00.000Z"),
        grade: 'P',
        score: 12
      },
      {
        date: ISODate("2012-05-14T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-12-21T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Bronx Grill',
    restaurant_id: '40369601'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dc3"),
    address: {
      building: '170',
      coord: [ -73.9035553, 40.878342 ],
      street: 'West  231 Street',
      zipcode: '10463'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-10-01T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2014-04-23T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-10-23T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-05-21T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2013-05-02T00:00:00.000Z"),
        grade: 'P',
        score: 3
      },
      {
        date: ISODate("2012-11-20T00:00:00.000Z"),
        grade: 'B',
        score: 24
      }
    ],
    name: "P & K'S Grill",
    restaurant_id: '40369895'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dcd"),
    address: {
      building: '4272',
      coord: [ -73.86720489999999, 40.8977501 ],
      street: 'Katonah Avenue',
      zipcode: '10470'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-23T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-11-04T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-04-29T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-09-24T00:00:00.000Z"),
        grade: 'B',
        score: 15
      }
    ],
    name: "John Mulligan'S Fireside Pub",
    restaurant_id: '40370150'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e2a"),
    address: {
      building: '2942',
      coord: [ -73.832183, 40.84710099999999 ],
      street: 'Westchester Avenue',
      zipcode: '10461'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-02-10T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-17T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2012-10-15T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2011-10-17T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-07-14T00:00:00.000Z"),
        grade: 'B',
        score: 18
      }
    ],
    name: 'Quality Cafe & Restaurant',
    restaurant_id: '40374259'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e8e"),
    address: {
      building: '3657',
      coord: [ -73.901496, 40.885102 ],
      street: 'Kingsbridge Avenue',
      zipcode: '10463'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-09-25T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-04-30T00:00:00.000Z"),
        grade: 'B',
        score: 20
      },
      {
        date: ISODate("2013-08-19T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-03-06T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-26T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-10-19T00:00:00.000Z"),
        grade: 'B',
        score: 18
      }
    ],
    name: 'Riverdale Diner',
    restaurant_id: '40380253'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0eb7"),
    address: {
      building: '1506',
      coord: [ -73.8537226, 40.8427071 ],
      street: 'Bronxdale Avenue',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-04T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-05-22T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-12-13T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-05-14T00:00:00.000Z"),
        grade: 'B',
        score: 16
      },
      {
        date: ISODate("2011-12-28T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-08-10T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Castlehill Diner',
    restaurant_id: '40382517'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ed5"),
    address: {
      building: '5977',
      coord: [ -73.8982704, 40.8896923 ],
      street: 'Broadway',
      zipcode: '10463'
    },
    borough: 'Bronx',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-30T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2013-04-25T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-11-20T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-05-30T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-12-19T00:00:00.000Z"),
        grade: 'B',
        score: 18
      }
    ],
    name: 'Short Stop Restaurant',
    restaurant_id: '40383819'
  }
]
 */