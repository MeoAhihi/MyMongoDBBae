a = db.restaurant.find(
  {
    "grades.1.grade": "A",
    "grades.1.score": 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z"),
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
    _id: ObjectId("645a2908bb31ded6e1dc12d8"),
    grades: [
      {
        date: ISODate("2015-01-12T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-08-11T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-01-14T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-02-07T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-04-30T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Club Macanudo (Cigar Bar)',
    restaurant_id: '40526406'
  }
]
 */