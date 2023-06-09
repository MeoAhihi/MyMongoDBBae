a = db.restaurant.find({
  cuisine: {
    $ne: "American ",
  },
  grades: {
    $elemMatch: {
      score: {
        $gt: 70,
      },
    },
  },
  "address.coord": {
    $lt: -65.754168,
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
    _id: ObjectId("645a2908bb31ded6e1dc1015"),
    address: {
      building: '101',
      coord: [ -73.9243061, 40.8276297 ],
      street: 'East 161 Street',
      zipcode: '10451'
    },
    borough: 'Bronx',
    cuisine: 'Latin (Cuban, Dominican, Puerto Rican, South & Central American)',
    grades: [
      {
        date: ISODate("2014-04-10T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2013-04-11T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2012-10-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-10-10T00:00:00.000Z"),
        grade: 'P',
        score: 12
      },
      {
        date: ISODate("2012-05-25T00:00:00.000Z"),
        grade: 'B',
        score: 14
      },
      {
        date: ISODate("2011-09-14T00:00:00.000Z"),
        grade: 'B',
        score: 26
      },
      {
        date: ISODate("2011-04-25T00:00:00.000Z"),
        grade: 'C',
        score: 76
      }
    ],
    name: 'El Molino Rojo Restaurant',
    restaurant_id: '40393688'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1161"),
    address: {
      building: '289',
      coord: [ -73.94610279999999, 40.7137587 ],
      street: 'Manhattan Avenue',
      zipcode: '11211'
    },
    borough: 'Brooklyn',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-03-19T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-10-10T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-05-07T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-09-11T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2012-04-18T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-09-27T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2011-05-03T00:00:00.000Z"),
        grade: 'C',
        score: 77
      }
    ],
    name: 'Fortunato Bros Cafe & Bakery',
    restaurant_id: '40400561'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc178c"),
    address: {
      building: '231',
      coord: [ -73.9772294, 40.7527262 ],
      street: 'Grand Central Station',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'Italian',
    grades: [
      {
        date: ISODate("2015-01-07T00:00:00.000Z"),
        grade: 'Z',
        score: 20
      },
      {
        date: ISODate("2014-07-03T00:00:00.000Z"),
        grade: 'B',
        score: 14
      },
      {
        date: ISODate("2013-12-21T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-05-17T00:00:00.000Z"),
        grade: 'C',
        score: 76
      },
      {
        date: ISODate("2012-04-20T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: 'Two Boots Grand Central',
    restaurant_id: '40725591'
  }
]
 */