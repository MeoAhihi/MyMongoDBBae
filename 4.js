a = db.restaurant.find(
  {},
  {
    _id: 0,
    restaurant_id: 1,
    name: 1,
    borough: 1,
    "address.zipcode": 1,
  }
);
print(a);
/**
 * [
  {
    address: { zipcode: '11224' },
    borough: 'Brooklyn',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    address: { zipcode: '11369' },
    borough: 'Queens',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    address: { zipcode: '10462' },
    borough: 'Bronx',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    address: { zipcode: '11219' },
    borough: 'Brooklyn',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    address: { zipcode: '11226' },
    borough: 'Brooklyn',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    address: { zipcode: '10460' },
    borough: 'Bronx',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    address: { zipcode: '10065' },
    borough: 'Manhattan',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    address: { zipcode: '11208' },
    borough: 'Brooklyn',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    address: { zipcode: '11214' },
    borough: 'Brooklyn',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    address: { zipcode: '11223' },
    borough: 'Brooklyn',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    address: { zipcode: '11004' },
    borough: 'Queens',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    address: { zipcode: '11218' },
    borough: 'Brooklyn',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    address: { zipcode: '10314' },
    borough: 'Staten Island',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    address: { zipcode: '11356' },
    borough: 'Queens',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    address: { zipcode: '11215' },
    borough: 'Brooklyn',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    address: { zipcode: '10003' },
    borough: 'Manhattan',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    address: { zipcode: '11106' },
    borough: 'Queens',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    address: { zipcode: '10024' },
    borough: 'Manhattan',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {
    address: { zipcode: '10021' },
    borough: 'Manhattan',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    address: { zipcode: '10025' },
    borough: 'Manhattan',
    name: 'P & S Deli Grocery',
    restaurant_id: '40362264'
  }
]
Type "it" for more
 */