a = db.restaurant.find(
  {},
  {},
  {
    sort: {
      cuisine: 1,
      borough: -1,
    },
  }
);
print(a);
/**
 * 
  {
    _id: ObjectId("645a2908bb31ded6e1dc1392"),
    address: {
      building: '1345',
      coord: [ -73.959249, 40.768076 ],
      street: '2 Avenue',
      zipcode: '10021'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      {
        date: ISODate("2014-10-07T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-10-23T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2012-10-26T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-04-26T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-01-12T00:00:00.000Z"),
        grade: 'P',
        score: 10
      }
    ],
    name: 'Afghan Kebab House',
    restaurant_id: '40552806'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc14bd"),
    address: {
      building: '34',
      coord: [ -73.9883612, 40.7286391 ],
      street: 'St Marks Place',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      {
        date: ISODate("2014-02-20T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-08-06T00:00:00.000Z"),
        grade: 'B',
        score: 17
      },
      {
        date: ISODate("2013-01-31T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-05-24T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-12-13T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-08-25T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Khyber Pass',
    restaurant_id: '40589545'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1571"),
    address: {
      building: '764',
      coord: [ -73.9880435, 40.7641423 ],
      street: '9 Avenue',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      {
        date: ISODate("2014-12-30T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-10-10T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2013-02-25T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-08-09T00:00:00.000Z"),
        grade: 'C',
        score: 2
      },
      {
        date: ISODate("2012-02-16T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Afghan Kebab House #1',
    restaurant_id: '40616799'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1a98"),
    address: {
      building: '787',
      coord: [ -73.9880886, 40.7651331 ],
      street: '9 Avenue',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'Afghan',
    grades: [
      {
        date: ISODate("2014-07-22T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-07-08T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-02-05T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2011-11-28T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'Ariana Kebab House',
    restaurant_id: '40868400'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc190a"),
    address: {
      building: '14612',
      coord: [ -73.8057078, 40.6948408 ],
      street: 'Liberty Avenue',
      zipcode: '11435'
    },
    borough: 'Queens',
    cuisine: 'African',
    grades: [
      {
        date: ISODate("2014-04-16T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2013-09-16T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2012-08-23T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-02-21T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-06-30T00:00:00.000Z"),
        grade: 'B',
        score: 19
      }
    ],
    name: 'Africana Restaurant',
    restaurant_id: '40798504'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1696"),
    address: {
      building: '195',
      coord: [ -73.9717845, 40.6897199 ],
      street: 'Dekalb Avenue',
      zipcode: '11205'
    },
    borough: 'Brooklyn',
    cuisine: 'African',
    grades: [
      {
        date: ISODate("2014-08-18T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-01-13T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2012-12-19T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-08-01T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-03-12T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-11-01T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Madiba',
    restaurant_id: '40684161'
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
    _id: ObjectId("645a2908bb31ded6e1dc19c5"),
    address: {
      building: '2364',
      coord: [ -73.9025083, 40.8603246 ],
      street: 'Jerome Avenue',
      zipcode: '10468'
    },
    borough: 'Bronx',
    cuisine: 'African',
    grades: [
      {
        date: ISODate("2014-04-22T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-10-22T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-10-04T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-05-26T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Ebe Ye Yie African Restaurant',
    restaurant_id: '40832718'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cf0"),
    address: {
      building: '37',
      coord: [ -74.138263, 40.546681 ],
      street: 'Mansion Ave',
      zipcode: '10308'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-04-22T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-09-25T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2012-06-09T00:00:00.000Z"),
        grade: 'A',
        score: 8
      }
    ],
    name: 'Great Kills Yacht Club',
    restaurant_id: '40364610'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cfc"),
    address: {
      building: '6736',
      coord: [ -74.2274942, 40.5071996 ],
      street: 'Hylan Boulevard',
      zipcode: '10309'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-08-13T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-08-20T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2012-06-18T00:00:00.000Z"),
        grade: 'A',
        score: 6
      }
    ],
    name: 'South Shore Swimming Club',
    restaurant_id: '40365120'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d14"),
    address: {
      building: '390',
      coord: [ -74.07444319999999, 40.6096914 ],
      street: 'Hylan Boulevard',
      zipcode: '10305'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-06-15T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-08-30T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-10-07T00:00:00.000Z"),
        grade: 'B',
        score: 20
      }
    ],
    name: "Labetti'S Post # 2159",
    restaurant_id: '40365022'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d28"),
    address: {
      building: '3823',
      coord: [ -74.16536339999999, 40.5450793 ],
      street: 'Richmond Avenue',
      zipcode: '10312'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-15T00:00:00.000Z"),
        grade: 'B',
        score: 20
      },
      {
        date: ISODate("2013-04-01T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-03-12T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: "Joyce'S Tavern",
    restaurant_id: '40365692'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d4a"),
    address: {
      building: '135',
      coord: [ -74.10465599999999, 40.58834 ],
      street: 'Flagg Place',
      zipcode: '10304'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-10T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-05-22T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-11-29T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-04-13T00:00:00.000Z"),
        grade: 'B',
        score: 23
      },
      {
        date: ISODate("2011-08-13T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Richmond County Country Club',
    restaurant_id: '40366928'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d4f"),
    address: {
      building: '697',
      coord: [ -74.11223799999999, 40.629819 ],
      street: 'Forest Avenue',
      zipcode: '10310'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-17T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2013-10-03T00:00:00.000Z"),
        grade: 'B',
        score: 22
      },
      {
        date: ISODate("2013-02-13T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-06-11T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-05T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "Li Greci'S Staaten Restaurant",
    restaurant_id: '40366711'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d64"),
    address: {
      building: '17',
      coord: [ -74.1350211, 40.6369042 ],
      street: 'Harrison Avenue',
      zipcode: '10302'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-22T00:00:00.000Z"),
        grade: 'B',
        score: 15
      },
      {
        date: ISODate("2013-10-23T00:00:00.000Z"),
        grade: 'B',
        score: 16
      },
      {
        date: ISODate("2013-04-16T00:00:00.000Z"),
        grade: 'B',
        score: 17
      },
      {
        date: ISODate("2012-03-31T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "Buddy'S Wonder Bar",
    restaurant_id: '40367442'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d83"),
    address: {
      building: '2001',
      coord: [ -74.099018, 40.58116500000001 ],
      street: 'Hylan Boulevard',
      zipcode: '10306'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-10-06T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2014-03-20T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-09-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-04-01T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-03-05T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Colonnade Diner',
    restaurant_id: '40368291'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0da6"),
    address: {
      building: '372',
      coord: [ -74.1018239, 40.630788 ],
      street: 'Forest Avenue',
      zipcode: '10301'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-03-08T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-09-17T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-02-14T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-07-14T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-12-14T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-07-11T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: "Jody'S Club",
    restaurant_id: '40369158'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0de6"),
    address: {
      building: '1745',
      coord: [ -74.146976, 40.625178 ],
      street: 'Forest Avenue',
      zipcode: '10303'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-11-15T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2014-06-24T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-01-08T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-12-07T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-06-23T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-24T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Perkins Family Restaurant & Bakery',
    restaurant_id: '40370910'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0df2"),
    address: {
      building: '2055',
      coord: [ -74.1321, 40.61266000000001 ],
      street: 'Victory Boulevard',
      zipcode: '10314'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-11-06T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2014-05-06T00:00:00.000Z"),
        grade: 'B',
        score: 20
      },
      {
        date: ISODate("2013-01-26T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-12-17T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: "Schaffer'S Tavern",
    restaurant_id: '40371771'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0df6"),
    address: {
      building: '275',
      coord: [ -74.1235473, 40.6215341 ],
      street: 'Martling Ave',
      zipcode: '10314'
    },
    borough: 'Staten Island',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-04-09T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-01-16T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-06T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Exclusive Catering',
    restaurant_id: '40372016'
  }
]
Type "it" for more
 */