a = db.restaurant.find(
  {
    "grades.grade": "A",
    "grades.score": {
      $gt: 11,
    },
    "grades.date": ISODate("2014-08-11T00:00:00Z"),
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);
print(a);
