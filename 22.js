a = db.restaurant.find(
  {
    grades: {
      $elemMatch: {
        grade: 'A',
        score: 11,
        date: ISODate("2014-08-11T00:00:00Z"),
      }
    }
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0dfd"),
    grades: [
      {
        date: ISODate("2014-08-11T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-12-10T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-06-10T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-25T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2011-09-13T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: 'Don Filippo Restaurant',
    restaurant_id: '40372417'
  }
]
 */