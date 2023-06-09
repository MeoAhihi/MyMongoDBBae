a = db.restaurant.find(
  {
    cuisine: {
      $ne: "American ",
    },
    "grades.grade": "A",
    borough: {
      $ne: "Brooklyn",
    },
  },
  {},
  {
    sort: {
      cuisine: -1,
    },
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc13ae"),
    address: {
      building: '89',
      coord: [ -73.9995899, 40.7168015 ],
      street: 'Baxter Street',
      zipcode: '10013'
    },
    borough: 'Manhattan',
    cuisine: 'Vietnamese/Cambodian/Malaysia',
    grades: [
      {
        date: ISODate("2014-08-21T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-08-31T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-04-11T00:00:00.000Z"),
        grade: 'C',
        score: 3
      },
      {
        date: ISODate("2012-10-17T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2012-05-15T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Thai Son',
    restaurant_id: '40559606'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1471"),
    address: {
      building: '8278',
      coord: [ -73.88143509999999, 40.7412552 ],
      street: 'Broadway',
      zipcode: '11373'
    },
    borough: 'Queens',
    cuisine: 'Vietnamese/Cambodian/Malaysia',
    grades: [
      {
        date: ISODate("2014-06-12T00:00:00.000Z"),
        grade: 'B',
        score: 21
      },
      {
        date: ISODate("2013-05-20T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-12-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-12-03T00:00:00.000Z"),
        grade: 'P',
        score: 5
      },
      {
        date: ISODate("2012-05-04T00:00:00.000Z"),
        grade: 'B',
        score: 27
      }
    ],
    name: 'Pho Bac Vietnamese Seafood Cuisine',
    restaurant_id: '40578058'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc185b"),
    address: {
      building: '148',
      coord: [ -74.000254, 40.7172727 ],
      street: 'Centre Street',
      zipcode: '10013'
    },
    borough: 'Manhattan',
    cuisine: 'Vietnamese/Cambodian/Malaysia',
    grades: [
      {
        date: ISODate("2014-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-05-19T00:00:00.000Z"),
        grade: 'C',
        score: 5
      },
      {
        date: ISODate("2013-11-15T00:00:00.000Z"),
        grade: 'B',
        score: 14
      },
      {
        date: ISODate("2013-03-08T00:00:00.000Z"),
        grade: 'B',
        score: 25
      },
      {
        date: ISODate("2012-05-22T00:00:00.000Z"),
        grade: 'B',
        score: 23
      },
      {
        date: ISODate("2011-10-27T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Nha-Trang Centre Vietnam Restaurant',
    restaurant_id: '40751226'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f56"),
    address: {
      building: '300',
      coord: [ -73.985568, 40.7307496 ],
      street: 'East 12 Street',
      zipcode: '10003'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-02-05T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-04-24T00:00:00.000Z"),
        grade: 'B',
        score: 19
      },
      {
        date: ISODate("2012-01-17T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-07-25T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Angelica Kitchen',
    restaurant_id: '40388281'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc111a"),
    address: {
      building: '1307',
      coord: [ -73.9589834, 40.77141839999999 ],
      street: '3 Avenue',
      zipcode: '10021'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-12-03T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-02-18T00:00:00.000Z"),
        grade: 'B',
        score: 22
      },
      {
        date: ISODate("2013-06-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-06-28T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: 'Candle Cafe',
    restaurant_id: '40399007'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1272"),
    address: {
      building: '547',
      coord: [ -92.7292446, 41.7461746 ],
      street: '6 Avenue',
      zipcode: '10011'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-09-26T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2014-04-07T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-10-03T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-09-10T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-04-30T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-11-30T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Village Yogurt',
    restaurant_id: '40512123'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1311"),
    address: {
      building: '46',
      coord: [ -74.000252, 40.7356228 ],
      street: 'Greenwich Avenue',
      zipcode: '10011'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-07-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-12-31T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-05-24T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-10-11T00:00:00.000Z"),
        grade: 'A',
        score: 6
      }
    ],
    name: 'Village Natural',
    restaurant_id: '40536786'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc15b7"),
    address: {
      building: '405',
      coord: [ -73.98565239999999, 40.7263767 ],
      street: 'East    6 Street',
      zipcode: '10009'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-09-29T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-01-27T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2013-07-31T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-02-26T00:00:00.000Z"),
        grade: 'B',
        score: 18
      },
      {
        date: ISODate("2012-08-06T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-01-19T00:00:00.000Z"),
        grade: 'B',
        score: 22
      }
    ],
    name: 'Caravan Of Dreams',
    restaurant_id: '40635781'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc15d7"),
    address: {
      building: '646',
      coord: [ -73.97279, 40.791289 ],
      street: 'Amsterdam Avenue',
      zipcode: '10025'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-02-19T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-11-29T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-10-03T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-04-11T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: 'Mana',
    restaurant_id: '40644922'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1a62"),
    address: {
      building: '140',
      coord: [ -74.0004534, 40.7311503 ],
      street: 'West    4 Street',
      zipcode: '10012'
    },
    borough: 'Manhattan',
    cuisine: 'Vegetarian',
    grades: [
      {
        date: ISODate("2014-06-30T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2013-06-13T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-01-28T00:00:00.000Z"),
        grade: 'C',
        score: 54
      },
      {
        date: ISODate("2012-06-21T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2012-01-25T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Red Bamboo',
    restaurant_id: '40861201'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cc3"),
    address: {
      building: '60',
      coord: [ -74.0085357, 40.70620539999999 ],
      street: 'Wall Street',
      zipcode: '10005'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-09-26T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-09-21T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-05-09T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'The Country Cafe',
    restaurant_id: '40362715'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1119"),
    address: {
      building: '386',
      coord: [ -73.981366, 40.741888 ],
      street: '3 Avenue',
      zipcode: '10016'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-09-23T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-09-10T00:00:00.000Z"),
        grade: 'A',
        score: 5
      }
    ],
    name: 'Turkish Kitchen',
    restaurant_id: '40399372'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc13ac"),
    address: {
      building: '64',
      coord: [ -73.9788293, 40.7765158 ],
      street: 'West   71 Street',
      zipcode: '10023'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-09-04T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2014-02-07T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-04-18T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-07-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-02-01T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: 'Pasha Turkish Restaurant',
    restaurant_id: '40559546'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc13b9"),
    address: {
      building: '1405',
      coord: [ -73.95796530000001, 40.7697258 ],
      street: 'Second Avenue',
      zipcode: '10021'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-10-23T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2014-03-20T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-08-28T00:00:00.000Z"),
        grade: 'B',
        score: 21
      },
      {
        date: ISODate("2012-12-05T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2011-10-27T00:00:00.000Z"),
        grade: 'A',
        score: 7
      }
    ],
    name: 'Uskudar Restaurant',
    restaurant_id: '40559172'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1544"),
    address: {
      building: '25505',
      coord: [ -73.734503, 40.772264 ],
      street: 'Northern Boulevard',
      zipcode: '11362'
    },
    borough: 'Queens',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-12-29T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-04-24T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-09-25T00:00:00.000Z"),
        grade: 'B',
        score: 17
      },
      {
        date: ISODate("2013-02-20T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Kebab House',
    restaurant_id: '40608102'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1652"),
    address: {
      building: '631',
      coord: [ -73.991755, 40.760138 ],
      street: '9 Avenue',
      zipcode: '10036'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-06-10T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-12-30T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-24T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-02-22T00:00:00.000Z"),
        grade: 'B',
        score: 20
      }
    ],
    name: 'Turkish Cuisine',
    restaurant_id: '40668464'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1852"),
    address: {
      building: '2637',
      coord: [ -73.970573, 40.797339 ],
      street: 'Broadway',
      zipcode: '10025'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-06-27T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-29T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-04-19T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-10-05T00:00:00.000Z"),
        grade: 'B',
        score: 15
      }
    ],
    name: 'Turkuaz Turkish Cuisine',
    restaurant_id: '40749081'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc196e"),
    address: {
      building: '513',
      coord: [ -73.978636, 40.74148 ],
      street: '2 Avenue',
      zipcode: '10016'
    },
    borough: 'Manhattan',
    cuisine: 'Turkish',
    grades: [
      {
        date: ISODate("2014-10-22T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2014-05-08T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-11-19T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-04-03T00:00:00.000Z"),
        grade: 'B',
        score: 26
      },
      {
        date: ISODate("2012-02-21T00:00:00.000Z"),
        grade: 'A',
        score: 4
      }
    ],
    name: 'Saharas Turkish Cuisine',
    restaurant_id: '40815015'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0e25"),
    address: {
      building: '244',
      coord: [ -73.9865289, 40.7606981 ],
      street: 'West   48 Street',
      zipcode: '10036'
    },
    borough: 'Manhattan',
    cuisine: 'Thai',
    grades: [
      {
        date: ISODate("2014-08-13T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-01-14T00:00:00.000Z"),
        grade: 'B',
        score: 24
      },
      {
        date: ISODate("2013-07-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-01-10T00:00:00.000Z"),
        grade: 'C',
        score: 4
      },
      {
        date: ISODate("2012-06-18T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-02-17T00:00:00.000Z"),
        grade: 'P',
        score: 6
      }
    ],
    name: 'Pongsri Thai Restaurant',
    restaurant_id: '40374088'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ff1"),
    address: {
      building: '396',
      coord: [ -73.9809909, 40.7422324 ],
      street: 'Third Avenue',
      zipcode: '10016'
    },
    borough: 'Manhattan',
    cuisine: 'Thai',
    grades: [
      {
        date: ISODate("2014-10-30T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-06-04T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-03-08T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: 'Jaiya Thai Oriental Restaurant',
    restaurant_id: '40392724'
  }
]
Type "it" for more
 */