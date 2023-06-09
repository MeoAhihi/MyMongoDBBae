a = db.restaurant.find({
  grades: {
    $elemMatch: {
      score: {
        $gt: 90,
      },
    },
  },
});
print(a)
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e02"),
    address: {
      building: '65',
      coord: [ -73.9782725, 40.7624022 ],
      street: 'West   54 Street',
      zipcode: '10019'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-08-22T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2014-03-28T00:00:00.000Z"),
        grade: 'C',
        score: 131
      },
      {
        date: ISODate("2013-09-25T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-04-08T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2012-10-15T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-10-19T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "Murals On 54/Randolphs'S",
    restaurant_id: '40372466'
  },
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
  }
]
 */