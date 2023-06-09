a = db.restaurant.find(
  {},
  {},
  {
    sort: {
      name: -1,
    },
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0d60"),
    address: {
      building: '6946',
      coord: [ -73.8811834, 40.7017759 ],
      street: 'Myrtle Avenue',
      zipcode: '11385'
    },
    borough: 'Queens',
    cuisine: 'German',
    grades: [
      {
        date: ISODate("2014-09-24T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2014-04-17T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-03-12T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-10-02T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-05-09T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-12-28T00:00:00.000Z"),
        grade: 'B',
        score: 24
      }
    ],
    name: 'Zum Stammtisch',
    restaurant_id: '40367377'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc189d"),
    address: {
      building: '107109',
      coord: [ -73.9744668, 40.731155 ],
      street: 'Avenue C',
      zipcode: '10009'
    },
    borough: 'Manhattan',
    cuisine: 'German',
    grades: [
      {
        date: ISODate("2014-03-04T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-08-21T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-02-27T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-06-05T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-12-20T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-07-15T00:00:00.000Z"),
        grade: 'A',
        score: 6
      }
    ],
    name: 'Zum Schneider',
    restaurant_id: '40763382'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1ada"),
    address: {
      building: '2905',
      coord: [ -73.91337299999999, 40.775064 ],
      street: '23 Avenue',
      zipcode: '11105'
    },
    borough: 'Queens',
    cuisine: 'Greek',
    grades: [
      {
        date: ISODate("2014-09-29T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-04-18T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-03-19T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-10-03T00:00:00.000Z"),
        grade: 'B',
        score: 20
      },
      {
        date: ISODate("2012-05-07T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: "Zorba'S",
    restaurant_id: '40877247'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1922"),
    address: {
      building: '305',
      coord: [ -73.94830499999999, 40.781662 ],
      street: 'East 92 Street',
      zipcode: '10128'
    },
    borough: 'Manhattan',
    cuisine: 'Brazilian',
    grades: [
      {
        date: ISODate("2015-01-09T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2014-07-16T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-04-26T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2012-04-21T00:00:00.000Z"),
        grade: 'A',
        score: 12
      }
    ],
    name: 'Zebu Grill',
    restaurant_id: '40800325'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc10dd"),
    address: {
      building: '29',
      coord: [ -73.86119219999999, 40.8338023 ],
      street: 'Hugh Grant Circle',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-08-27T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-09-10T00:00:00.000Z"),
        grade: 'A',
        score: 0
      },
      {
        date: ISODate("2013-05-07T00:00:00.000Z"),
        grade: 'C',
        score: 2
      },
      {
        date: ISODate("2013-03-23T00:00:00.000Z"),
        grade: 'P',
        score: 13
      },
      {
        date: ISODate("2012-10-24T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-11-01T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "Zaro'S Bread Basket",
    restaurant_id: '40397863'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1258"),
    address: {
      building: '1',
      coord: [ -76.878256, 40.26205 ],
      street: 'Pennsylvania Station (Amtrack)',
      zipcode: '10001'
    },
    borough: 'Manhattan',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-02-07T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-02-11T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2012-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2012-04-05T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2011-11-17T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2011-07-05T00:00:00.000Z"),
        grade: 'A',
        score: 4
      }
    ],
    name: "Zaro'S Bread Basket",
    restaurant_id: '40510389'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1280"),
    address: {
      building: '89',
      coord: [ -73.97729919999999, 40.7524958 ],
      street: 'East   42 Street',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-12-23T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2014-01-13T00:00:00.000Z"),
        grade: 'A',
        score: 4
      },
      {
        date: ISODate("2013-01-23T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2012-08-20T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-03-30T00:00:00.000Z"),
        grade: 'A',
        score: 9
      }
    ],
    name: "Zaro'S Bread Basket",
    restaurant_id: '40512617'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc149f"),
    address: {
      building: '89',
      coord: [ -73.97729919999999, 40.7524958 ],
      street: 'East   42 Street',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-12-11T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2014-07-17T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-06-26T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-01-29T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2012-07-16T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: "Zaro'S Bread Basket",
    restaurant_id: '40586000'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc185c"),
    address: {
      building: '2',
      coord: [ -73.992255, 40.749712 ],
      street: 'Penn Plaza',
      zipcode: '10121'
    },
    borough: 'Manhattan',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-02-18T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-01-22T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2012-03-21T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-11-09T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2011-07-25T00:00:00.000Z"),
        grade: 'B',
        score: 18
      }
    ],
    name: "Zaro'S Bread Basket",
    restaurant_id: '40750766'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1215"),
    address: {
      building: '89',
      coord: [ -73.97729919999999, 40.7524958 ],
      street: 'East   42 Street',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-09-29T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-09-11T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2012-09-14T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: "Zaro'S Bakery",
    restaurant_id: '40423705'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc16a7"),
    address: {
      building: '370',
      coord: [ -73.9768121, 40.7507385 ],
      street: 'Lexington Avenue',
      zipcode: '10017'
    },
    borough: 'Manhattan',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-09-18T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-09-09T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-08T00:00:00.000Z"),
        grade: 'B',
        score: 14
      },
      {
        date: ISODate("2012-10-15T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-05-24T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2011-10-31T00:00:00.000Z"),
        grade: 'B',
        score: 25
      }
    ],
    name: "Zaro'S Bakery",
    restaurant_id: '40686674'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0df1"),
    address: {
      building: '500',
      coord: [ -73.9828058, 40.7150766 ],
      street: 'Grand Street',
      zipcode: '10002'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2014-03-20T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-03-13T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2012-10-19T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-05-25T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-06-08T00:00:00.000Z"),
        grade: 'A',
        score: 8
      }
    ],
    name: "Zafi'S Luncheonette",
    restaurant_id: '40371718'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1ad1"),
    address: {
      building: '301',
      coord: [ -73.9465592, 40.8165415 ],
      street: 'West  135 Street',
      zipcode: '10030'
    },
    borough: 'Manhattan',
    cuisine: 'Caribbean',
    grades: [
      {
        date: ISODate("2014-01-08T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-07-12T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-01-30T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2012-12-06T00:00:00.000Z"),
        grade: 'C',
        score: 11
      },
      {
        date: ISODate("2012-02-28T00:00:00.000Z"),
        grade: 'B',
        score: 16
      }
    ],
    name: 'Yvonne Yvonne Restaurant',
    restaurant_id: '40875849'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc15ea"),
    address: {
      building: '1292',
      coord: [ -73.9563202, 40.7846507 ],
      street: 'Madison Avenue',
      zipcode: '10128'
    },
    borough: 'Manhattan',
    cuisine: 'American ',
    grades: [
      {
        date: ISODate("2015-01-05T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-08-08T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2013-12-17T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-07-10T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2013-01-08T00:00:00.000Z"),
        grade: 'C',
        score: 41
      }
    ],
    name: 'Yura & Company On Madison',
    restaurant_id: '40646987'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc18a9"),
    address: {
      building: '9021',
      coord: [ -73.87785749999999, 40.760312 ],
      street: '31 Avenue',
      zipcode: '11369'
    },
    borough: 'Queens',
    cuisine: 'Chinese',
    grades: [
      {
        date: ISODate("2014-12-10T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-06-12T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-11-12T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2013-04-10T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2012-10-17T00:00:00.000Z"),
        grade: 'B',
        score: 22
      },
      {
        date: ISODate("2012-05-23T00:00:00.000Z"),
        grade: 'A',
        score: 8
      },
      {
        date: ISODate("2011-12-22T00:00:00.000Z"),
        grade: 'P',
        score: 6
      }
    ],
    name: 'Yummy Kitchen',
    restaurant_id: '40763160'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc12da"),
    address: {
      building: '518',
      coord: [ -74.02590599999999, 40.6209702 ],
      street: '86 Street',
      zipcode: '11209'
    },
    borough: 'Brooklyn',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-05-01T00:00:00.000Z"),
        grade: 'A',
        score: 3
      },
      {
        date: ISODate("2013-04-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-11-19T00:00:00.000Z"),
        grade: 'A',
        score: 5
      },
      {
        date: ISODate("2011-11-04T00:00:00.000Z"),
        grade: 'A',
        score: 13
      }
    ],
    name: 'Your Bakery',
    restaurant_id: '40529415'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc1341"),
    address: {
      building: '137',
      coord: [ -73.9901259, 40.7231435 ],
      street: 'East Houston Street',
      zipcode: '10002'
    },
    borough: 'Manhattan',
    cuisine: 'Eastern European',
    grades: [
      {
        date: ISODate("2014-06-23T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-06-03T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-06-25T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-01-31T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-08-30T00:00:00.000Z"),
        grade: 'A',
        score: 10
      }
    ],
    name: 'Yonah Shimmels Knishes',
    restaurant_id: '40544576'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc14e7"),
    address: {
      building: '292',
      coord: [ -73.9218923, 40.8169858 ],
      street: 'East  149 Street',
      zipcode: '10451'
    },
    borough: 'Bronx',
    cuisine: 'Pizza/Italian',
    grades: [
      {
        date: ISODate("2014-10-06T00:00:00.000Z"),
        grade: 'A',
        score: 7
      },
      {
        date: ISODate("2014-05-20T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2013-03-25T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2012-09-20T00:00:00.000Z"),
        grade: 'A',
        score: 11
      }
    ],
    name: 'Yolanda Pizzeria Restaurant',
    restaurant_id: '40594879'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0f4a"),
    address: {
      building: '1290',
      coord: [ -73.9788903, 40.7605367 ],
      street: 'Avenue Of Americas',
      zipcode: '10119'
    },
    borough: 'Manhattan',
    cuisine: 'Chinese',
    grades: [
      {
        date: ISODate("2014-09-23T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2013-12-11T00:00:00.000Z"),
        grade: 'A',
        score: 12
      },
      {
        date: ISODate("2013-04-09T00:00:00.000Z"),
        grade: 'B',
        score: 26
      },
      {
        date: ISODate("2012-10-04T00:00:00.000Z"),
        grade: 'B',
        score: 23
      },
      {
        date: ISODate("2012-05-07T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2011-12-20T00:00:00.000Z"),
        grade: 'B',
        score: 22
      }
    ],
    name: "Yip'S",
    restaurant_id: '40388209'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ffd"),
    address: {
      building: '404',
      coord: [ -73.97635439999999, 40.6438997 ],
      street: 'Church Avenue',
      zipcode: '11218'
    },
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    grades: [
      {
        date: ISODate("2014-10-29T00:00:00.000Z"),
        grade: 'A',
        score: 13
      },
      {
        date: ISODate("2014-03-24T00:00:00.000Z"),
        grade: 'A',
        score: 11
      },
      {
        date: ISODate("2013-10-25T00:00:00.000Z"),
        grade: 'C',
        score: 3
      },
      {
        date: ISODate("2012-10-01T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2012-05-09T00:00:00.000Z"),
        grade: 'C',
        score: 2
      }
    ],
    name: 'Yen Yen Restaurant',
    restaurant_id: '40393181'
  }
]
Type "it" for more
 */