a = db.restaurant.find(
  {},
  {},
  {
    sort: "name",
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc1941"),
    address: {
      building: '129',
      coord: [ -73.962943, 40.685007 ],
      street: 'Gates Avenue',
      zipcode: '11238'
    },
    borough: 'Brooklyn',
    cuisine: 'Italian',
    grades: [
      {
        date: ISODate("2014-03-06T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-08-29T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-03-08T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-06-27T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2011-11-17T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: '(Lewis Drug Store) Locanda Vini E Olii',
    restaurant_id: '40804423'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    address: {
      building: '1',
      coord: [ -73.96926909999999, 40.7685235 ],
      street: 'East   66 Street',
      zipcode: '10065'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-07T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-05-03T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2012-04-30T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2011-12-27T00:00:00.000Z"),
        grade: 'A',
        score: 0
      }
    ],
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc14c5"),
    address: {
      building: '10016',
      coord: [ -73.8216636, 40.5838155 ],
      street: 'Rockaway Beach Boulevard',
      zipcode: '11694'
    },
    borough: 'Queens',
    cuisine: 'Delicatessen',
    grades: [
      {
        date: ISODate("2014-01-28T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-08-20T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-03-19T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-03-06T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-03-01T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: '101 Deli',
    restaurant_id: '40591271'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc13b6"),
    address: {
      building: '10018',
      coord: [ -74.0343092, 40.6125569 ],
      street: '4 Avenue',
      zipcode: '11209'
    },
    borough: 'Brooklyn',
    cuisine: 'Italian',
    grades: [
      {
        date: ISODate("2014-12-01T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2013-11-29T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-06-03T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-06-05T00:00:00.000Z"),
        grade: 'B',
        score: 15
      },
      {
        date: ISODate("2012-01-10T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: '101 Restaurant And Bar',
    restaurant_id: '40560108'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1186"),
    address: {
      building: '1020',
      coord: [ -73.96396419999999, 40.8032642 ],
      street: 'Amsterdam Avenue',
      zipcode: '10025'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-06-19T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-12-27T00:00:00.000Z"),
        grade: 'C',
        score: 38
      }
    ],
    name: '1020 Bar',
    restaurant_id: '40401104'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc15c0"),
    address: {
      building: '10401',
      coord: [ -73.9004264, 40.6520939 ],
      street: 'Foster Avenue',
      zipcode: '11236'
    },
    borough: 'Brooklyn',
    cuisine: 'Café/Coffee/Tea',
    grades: [
      {
        date: ISODate("2014-12-08T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-04-08T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2013-03-07T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-10-04T00:00:00.000Z"),
        grade: 'A',
        score: 8
      }
    ],
    name: '104-01 Foster Avenue Coffee Shop(Ups)',
    restaurant_id: '40639261'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc166a"),
    address: {
      building: '256',
      coord: [ -73.998993, 40.74718060000001 ],
      street: '10Th Ave Bet 24 & 25 St )',
      zipcode: '10001'
    },
    borough: 'Manhattan',
    cuisine: 'Pizza',
    grades: [
      {
        date: ISODate("2014-11-10T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-10-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-05-31T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-12-14T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-07-09T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-02-03T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: '10Th Avenue Pizza & Cafe',
    restaurant_id: '40673117'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1b21"),
    address: {
      building: '0',
      coord: [ -73.7889689, 40.6433507 ],
      street: 'Central Taxi Hold',
      zipcode: '11430'
    },
    borough: 'Queens',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-03-06T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-08-21T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2012-02-06T00:00:00.000Z"),
        grade: 'B',
        score: 15
      }
    ],
    name: '111 Restaurant',
    restaurant_id: '40884354'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc16de"),
    address: {
      building: '15',
      coord: [ -73.9921155, 40.7364657 ],
      street: 'East   15 Street',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Japanese',
    grades: [
      {
        date: ISODate("2014-06-28T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-10-22T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-03-22T00:00:00.000Z"),
        grade: 'C',
        score: 64
      },
      {
        date: ISODate("2012-07-05T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-02-03T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-06-30T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: '15 East Restaurant',
    restaurant_id: '40698892'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ef6"),
    address: {
      building: '200',
      coord: [ -73.9804898, 40.6768216 ],
      street: '5 Avenue',
      zipcode: '11217'
    },
    borough: 'Brooklyn',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-03T00:00:00.000Z"),
        grade: 'B',
        score: 26
      },
      {
        date: ISODate("2013-10-30T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-03-21T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-08-07T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-03-09T00:00:00.000Z"),
        grade: 'C',
        score: 42
      },
      {
        date: ISODate("2011-10-13T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: '200 Fifth Avenue Restaurant & Sports Bar',
    restaurant_id: '40385555'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cdd"),
    address: {
      building: '21',
      coord: [ -73.9774394, 40.7604522 ],
      street: 'West   52 Street',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-05-14T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-08-13T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-04-04T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: '21 Club',
    restaurant_id: '40364362'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f6b"),
    address: {
      building: '25',
      coord: [ -73.9860427, 40.7229989 ],
      street: 'Avenue A',
      zipcode: '10009'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2013-10-29T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-10-27T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2011-10-18T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2011-06-23T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: '2A',
    restaurant_id: '40388784'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc14d2"),
    address: {
      building: '133',
      coord: [ -73.9702969, 40.75983919999999 ],
      street: 'East 55 Street',
      zipcode: '10022'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-04-03T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-03-27T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-10-17T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2012-04-27T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-12-06T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-07-18T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: '3 Deli & Grill',
    restaurant_id: '40592296'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0fbb"),
    address: {
      building: '1381',
      coord: [ -73.9538783, 40.787312 ],
      street: 'Madison Avenue',
      zipcode: '10029'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-08-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-04-18T00:00:00.000Z"),
        grade: 'B',
        score: 26
      },
      {
        date: ISODate("2013-03-12T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-10-11T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-05-10T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-12-15T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: '3 Guys',
    restaurant_id: '40391339'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc15cb"),
    address: {
      building: '1232',
      coord: [ -73.957787, 40.782685 ],
      street: 'Madison Avenue',
      zipcode: '10128'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-11-18T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-11-07T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-05-29T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-12-17T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-06-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-02-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: '3 Guys Resturant',
    restaurant_id: '40640495'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1537"),
    address: {
      building: '647',
      coord: [ -74.0001028, 40.7619413 ],
      street: 'West   42 Street',
      zipcode: '10036'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-11-24T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2014-06-04T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-11-20T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-03-20T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-12-22T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: '42Nd Street Pizza Diner',
    restaurant_id: '40605319'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc194e"),
    address: {
      building: '622',
      coord: [ -73.9942049, 40.7610193 ],
      street: '10 Avenue',
      zipcode: '10036'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-12-22T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-06-19T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-11-26T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2012-10-24T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-04-18T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "44 & X Hell'S Kitchen",
    restaurant_id: '40809948'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc16dc"),
    address: {
      building: '621',
      coord: [ -73.992069, 40.759761 ],
      street: '9 Avenue',
      zipcode: '10036'
    },
    borough: 'Manhattan',
    cuisine: 'Italian',
    grades: [
      {
        date: ISODate("2014-04-30T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-11-19T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-03-04T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2012-07-21T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-11-14T00:00:00.000Z"),
        grade: 'B',
        score: 16
      }
    ],
    name: '44 Sw Ristorante & Bar',
    restaurant_id: '40698807'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f94"),
    address: {
      building: '7205',
      coord: [ -73.8424017, 40.7194513 ],
      street: 'Austin Street',
      zipcode: '11375'
    },
    borough: 'Queens',
    cuisine: 'Mexican',
    grades: [
      {
        date: ISODate("2014-03-04T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-02-25T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2011-12-08T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2011-05-23T00:00:00.000Z"),
        grade: 'B',
        score: 18
      }
    ],
    name: '5 Burro Cafe',
    restaurant_id: '40390163'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc193b"),
    address: {
      building: '525',
      coord: [ -73.9728136, 40.75546629999999 ],
      street: 'Lexington Ave',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-07-22T00:00:00.000Z"),
        grade: 'C',
        score: 41
      },
      {
        date: ISODate("2014-01-24T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-05-15T00:00:00.000Z"),
        grade: 'B',
        score: 24
      },
      {
        date: ISODate("2012-09-12T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-04-12T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-10-24T00:00:00.000Z"),
        grade: 'C',
        score: 33
      }
    ],
    name: '525 Lex Restaurant & Bar',
    restaurant_id: '40806489'
  }
]
Type "it" for more
 */