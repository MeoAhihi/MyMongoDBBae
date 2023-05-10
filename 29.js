a = db.restaurant.find(
  {
    "address.coord": {
      $type: "double",
    },
  },
  {}
);
print(a);
/**
  [
    {
      _id: ObjectId("645a2908bb31ded6e1dc0ca7"),
      address: {
        building: '2780',
        coord: [ -73.98241999999999, 40.579505 ],
        street: 'Stillwell Avenue',
        zipcode: '11224'
      },
      borough: 'Brooklyn',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-06-10T00:00:00.000Z"),
          grade: 'A',
          score: 5
        },
        {
          date: ISODate("2013-06-05T00:00:00.000Z"),
          grade: 'A',
          score: 7
        },
        {
          date: ISODate("2012-04-13T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2011-10-12T00:00:00.000Z"),
          grade: 'A',
          score: 12
        }
      ],
      name: 'Riviera Caterer',
      restaurant_id: '40356018'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0ca8"),
      address: {
        building: '8825',
        coord: [ -73.8803827, 40.7643124 ],
        street: 'Astoria Boulevard',
        zipcode: '11369'
      },
      borough: 'Queens',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-11-15T00:00:00.000Z"),
          grade: 'Z',
          score: 38
        },
        {
          date: ISODate("2014-05-02T00:00:00.000Z"),
          grade: 'A',
          score: 10
        },
        {
          date: ISODate("2013-03-02T00:00:00.000Z"),
          grade: 'A',
          score: 7
        },
        {
          date: ISODate("2012-02-10T00:00:00.000Z"),
          grade: 'A',
          score: 13
        }
      ],
      name: 'Brunos On The Boulevard',
      restaurant_id: '40356151'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
      address: {
        building: '1007',
        coord: [ -73.856077, 40.848447 ],
        street: 'Morris Park Ave',
        zipcode: '10462'
      },
      borough: 'Bronx',
      cuisine: 'Bakery',
      grades: [
        {
          date: ISODate("2014-03-03T00:00:00.000Z"),
          grade: 'A',
          score: 2
        },
        {
          date: ISODate("2013-09-11T00:00:00.000Z"),
          grade: 'A',
          score: 6
        },
        {
          date: ISODate("2013-01-24T00:00:00.000Z"),
          grade: 'A',
          score: 10
        },
        {
          date: ISODate("2011-11-23T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2011-03-10T00:00:00.000Z"),
          grade: 'B',
          score: 14
        }
      ],
      name: 'Morris Park Bake Shop',
      restaurant_id: '30075445'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0caa"),
      address: {
        building: '6409',
        coord: [ -74.00528899999999, 40.628886 ],
        street: '11 Avenue',
        zipcode: '11219'
      },
      borough: 'Brooklyn',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-07-18T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-07-30T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-02-13T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2012-08-16T00:00:00.000Z"),
          grade: 'A',
          score: 2
        },
        {
          date: ISODate("2011-08-17T00:00:00.000Z"),
          grade: 'A',
          score: 11
        }
      ],
      name: 'Regina Caterers',
      restaurant_id: '40356649'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cab"),
      address: {
        building: '1839',
        coord: [ -73.9482609, 40.6408271 ],
        street: 'Nostrand Avenue',
        zipcode: '11226'
      },
      borough: 'Brooklyn',
      cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
      grades: [
        {
          date: ISODate("2014-07-14T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-07-10T00:00:00.000Z"),
          grade: 'A',
          score: 8
        },
        {
          date: ISODate("2012-07-11T00:00:00.000Z"),
          grade: 'A',
          score: 5
        },
        {
          date: ISODate("2012-02-23T00:00:00.000Z"),
          grade: 'A',
          score: 8
        }
      ],
      name: 'Taste The Tropics Ice Cream',
      restaurant_id: '40356731'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cac"),
      address: {
        building: '2300',
        coord: [ -73.8786113, 40.8502883 ],
        street: 'Southern Boulevard',
        zipcode: '10460'
      },
      borough: 'Bronx',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-05-28T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2013-06-19T00:00:00.000Z"),
          grade: 'A',
          score: 4
        },
        {
          date: ISODate("2012-06-15T00:00:00.000Z"),
          grade: 'A',
          score: 3
        }
      ],
      name: 'Wild Asia',
      restaurant_id: '40357217'
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
      _id: ObjectId("645a2908bb31ded6e1dc0cae"),
      address: {
        building: '1269',
        coord: [ -73.871194, 40.6730975 ],
        street: 'Sutter Avenue',
        zipcode: '11208'
      },
      borough: 'Brooklyn',
      cuisine: 'Chinese',
      grades: [
        {
          date: ISODate("2014-09-16T00:00:00.000Z"),
          grade: 'B',
          score: 21
        },
        {
          date: ISODate("2013-08-28T00:00:00.000Z"),
          grade: 'A',
          score: 7
        },
        {
          date: ISODate("2013-04-02T00:00:00.000Z"),
          grade: 'C',
          score: 56
        },
        {
          date: ISODate("2012-08-15T00:00:00.000Z"),
          grade: 'B',
          score: 27
        },
        {
          date: ISODate("2012-03-28T00:00:00.000Z"),
          grade: 'B',
          score: 27
        }
      ],
      name: 'May May Kitchen',
      restaurant_id: '40358429'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0caf"),
      address: {
        building: '7715',
        coord: [ -73.9973325, 40.61174889999999 ],
        street: '18 Avenue',
        zipcode: '11214'
      },
      borough: 'Brooklyn',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-04-16T00:00:00.000Z"),
          grade: 'A',
          score: 5
        },
        {
          date: ISODate("2013-04-23T00:00:00.000Z"),
          grade: 'A',
          score: 2
        },
        {
          date: ISODate("2012-04-24T00:00:00.000Z"),
          grade: 'A',
          score: 5
        },
        {
          date: ISODate("2011-12-16T00:00:00.000Z"),
          grade: 'A',
          score: 2
        }
      ],
      name: 'C & C Catering Service',
      restaurant_id: '40357437'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb0"),
      address: {
        building: '705',
        coord: [ -73.9653967, 40.6064339 ],
        street: 'Kings Highway',
        zipcode: '11223'
      },
      borough: 'Brooklyn',
      cuisine: 'Jewish/Kosher',
      grades: [
        {
          date: ISODate("2014-11-10T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2013-10-10T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2012-10-04T00:00:00.000Z"),
          grade: 'A',
          score: 7
        },
        {
          date: ISODate("2012-05-21T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2011-12-30T00:00:00.000Z"),
          grade: 'B',
          score: 19
        }
      ],
      name: 'Seuda Foods',
      restaurant_id: '40360045'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb1"),
      address: {
        building: '265-15',
        coord: [ -73.7032601, 40.7386417 ],
        street: 'Hillside Avenue',
        zipcode: '11004'
      },
      borough: 'Queens',
      cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
      grades: [
        {
          date: ISODate("2014-10-28T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2013-09-18T00:00:00.000Z"),
          grade: 'A',
          score: 10
        },
        {
          date: ISODate("2012-09-20T00:00:00.000Z"),
          grade: 'A',
          score: 13
        }
      ],
      name: 'Carvel Ice Cream',
      restaurant_id: '40361322'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb2"),
      address: {
        building: '203',
        coord: [ -73.97822040000001, 40.6435254 ],
        street: 'Church Avenue',
        zipcode: '11218'
      },
      borough: 'Brooklyn',
      cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
      grades: [
        {
          date: ISODate("2014-02-10T00:00:00.000Z"),
          grade: 'A',
          score: 2
        },
        {
          date: ISODate("2013-01-02T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2012-01-09T00:00:00.000Z"),
          grade: 'A',
          score: 3
        },
        {
          date: ISODate("2011-11-07T00:00:00.000Z"),
          grade: 'P',
          score: 12
        },
        {
          date: ISODate("2011-07-21T00:00:00.000Z"),
          grade: 'A',
          score: 13
        }
      ],
      name: 'Carvel Ice Cream',
      restaurant_id: '40360076'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb3"),
      address: {
        building: '2206',
        coord: [ -74.1377286, 40.6119572 ],
        street: 'Victory Boulevard',
        zipcode: '10314'
      },
      borough: 'Staten Island',
      cuisine: 'Jewish/Kosher',
      grades: [
        {
          date: ISODate("2014-10-06T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2014-05-20T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-04-04T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2012-01-24T00:00:00.000Z"),
          grade: 'A',
          score: 9
        }
      ],
      name: 'Kosher Island',
      restaurant_id: '40356442'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb4"),
      address: {
        building: '129-08',
        coord: [ -73.839297, 40.78147 ],
        street: '20 Avenue',
        zipcode: '11356'
      },
      borough: 'Queens',
      cuisine: 'Delicatessen',
      grades: [
        {
          date: ISODate("2014-08-16T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-08-27T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2012-09-20T00:00:00.000Z"),
          grade: 'A',
          score: 7
        },
        {
          date: ISODate("2011-09-29T00:00:00.000Z"),
          grade: 'A',
          score: 10
        }
      ],
      name: "Sal'S Deli",
      restaurant_id: '40361618'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb5"),
      address: {
        building: '284',
        coord: [ -73.9829239, 40.6580753 ],
        street: 'Prospect Park West',
        zipcode: '11215'
      },
      borough: 'Brooklyn',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-11-19T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2013-11-14T00:00:00.000Z"),
          grade: 'A',
          score: 2
        },
        {
          date: ISODate("2012-12-05T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2012-05-17T00:00:00.000Z"),
          grade: 'A',
          score: 11
        }
      ],
      name: 'The Movable Feast',
      restaurant_id: '40361606'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
      address: {
        building: '759',
        coord: [ -73.9925306, 40.7309346 ],
        street: 'Broadway',
        zipcode: '10003'
      },
      borough: 'Manhattan',
      cuisine: 'Delicatessen',
      grades: [
        {
          date: ISODate("2014-01-21T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-01-04T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2012-06-07T00:00:00.000Z"),
          grade: 'A',
          score: 6
        },
        {
          date: ISODate("2012-01-17T00:00:00.000Z"),
          grade: 'A',
          score: 8
        }
      ],
      name: "Bully'S Deli",
      restaurant_id: '40361708'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
      address: {
        building: '3406',
        coord: [ -73.94024739999999, 40.7623288 ],
        street: '10 Street',
        zipcode: '11106'
      },
      borough: 'Queens',
      cuisine: 'Delicatessen',
      grades: [
        {
          date: ISODate("2014-03-19T00:00:00.000Z"),
          grade: 'A',
          score: 3
        },
        {
          date: ISODate("2013-03-13T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2012-03-27T00:00:00.000Z"),
          grade: 'A',
          score: 8
        },
        {
          date: ISODate("2011-04-05T00:00:00.000Z"),
          grade: 'A',
          score: 7
        }
      ],
      name: "Steve Chu'S Deli & Grocery",
      restaurant_id: '40361998'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
      address: {
        building: '502',
        coord: [ -73.976112, 40.786714 ],
        street: 'Amsterdam Avenue',
        zipcode: '10024'
      },
      borough: 'Manhattan',
      cuisine: 'Chicken',
      grades: [
        {
          date: ISODate("2014-09-15T00:00:00.000Z"),
          grade: 'A',
          score: 10
        },
        {
          date: ISODate("2014-03-04T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2013-07-18T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2013-01-09T00:00:00.000Z"),
          grade: 'A',
          score: 11
        },
        {
          date: ISODate("2012-04-10T00:00:00.000Z"),
          grade: 'A',
          score: 10
        },
        {
          date: ISODate("2011-11-15T00:00:00.000Z"),
          grade: 'A',
          score: 7
        }
      ],
      name: "Harriet'S Kitchen",
      restaurant_id: '40362098'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cb9"),
      address: {
        building: '522',
        coord: [ -73.95171, 40.767461 ],
        street: 'East   74 Street',
        zipcode: '10021'
      },
      borough: 'Manhattan',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-09-02T00:00:00.000Z"),
          grade: 'A',
          score: 12
        },
        {
          date: ISODate("2013-12-19T00:00:00.000Z"),
          grade: 'B',
          score: 16
        },
        {
          date: ISODate("2013-05-28T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2012-12-07T00:00:00.000Z"),
          grade: 'A',
          score: 13
        },
        {
          date: ISODate("2012-03-29T00:00:00.000Z"),
          grade: 'A',
          score: 11
        }
      ],
      name: 'Glorious Food',
      restaurant_id: '40361521'
    },
    {
      _id: ObjectId("645a2908bb31ded6e1dc0cba"),
      address: {
        building: '730',
        coord: [ -73.96805719999999, 40.7925587 ],
        street: 'Columbus Avenue',
        zipcode: '10025'
      },
      borough: 'Manhattan',
      cuisine: 'American ',
      grades: [
        {
          date: ISODate("2014-09-12T00:00:00.000Z"),
          grade: 'B',
          score: 26
        },
        {
          date: ISODate("2013-08-28T00:00:00.000Z"),
          grade: 'A',
          score: 9
        },
        {
          date: ISODate("2013-03-25T00:00:00.000Z"),
          grade: 'B',
          score: 20
        },
        {
          date: ISODate("2012-02-14T00:00:00.000Z"),
          grade: 'A',
          score: 12
        }
      ],
      name: 'P & S Deli Grocery',
      restaurant_id: '40362264'
    }
  ]
  Type "it" for more
    */
