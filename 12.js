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
    $not: {
      $lt: -65.754168,
    },
  },
});
print(a);
 /**
  * 
  */