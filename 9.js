a = db.restaurant.find({
  grades: {
    $elemMatch: {
      score: {
        $gt: 80,
        $lt: 100,
      },
    },
  },
});
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0eab"),
    address: {
      building: '345',
      coord: [ -73.9864626, 40.7266739 ],
      street: 'East 6 Street',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Indian',
    grades: [
      {
        date: ISODate("2014-09-15T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2014-01-14T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-05-30T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-24T00:00:00.000Z"),
        grade: 'P',
        score: 2
      },
      {
        date: ISODate("2012-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-04-06T00:00:00.000Z"),
        grade: 'C',
        score: 92
      },
      {
        date: ISODate("2011-11-03T00:00:00.000Z"),
        grade: 'C',
        score: 41
      }
    ],
    name: 'Gandhi',
    restaurant_id: '40381295'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1004"),
    address: {
      building: '130',
      coord: [ -73.984758, 40.7457939 ],
      street: 'Madison Avenue',
      zipcode: '10016'
    },
    borough: 'Manhattan',
    cuisine: 'Pizza/Italian',
    grades: [
      {
        date: ISODate("2014-12-24T00:00:00.000Z"),
        grade: 'Z',
        score: 31
      },
      {
        date: ISODate("2014-06-17T00:00:00.000Z"),
        grade: 'C',
        score: 98
      },
      {
        date: ISODate("2013-12-12T00:00:00.000Z"),
        grade: 'C',
        score: 32
      },
      {
        date: ISODate("2013-05-22T00:00:00.000Z"),
        grade: 'B',
        score: 21
      },
      {
        date: ISODate("2012-05-02T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Bella Napoli',
    restaurant_id: '40393488'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1873"),
    address: {
      building: '',
      coord: [ -74.0163793, 40.7167671 ],
      street: 'Hudson River',
      zipcode: '10282'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-06-27T00:00:00.000Z"),
        grade: 'C',
        score: 89
      },
      {
        date: ISODate("2013-06-06T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2012-06-19T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'West 79Th Street Boat Basin Cafe',
    restaurant_id: '40756344'
  }
]
 */