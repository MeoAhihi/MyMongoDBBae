a = db.restaurant.find(
  {},
  {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
  }
);
print(a);
/**
 * [
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca8"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caa"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cab"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cae"),
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caf"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb0"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb1"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb2"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb3"),
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb4"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb5"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {

restaurants> load("C:\\Users\\HP\\OneDrive\\Máy tính\\Vix Phong\\2.js")
[
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca8"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caa"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cab"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cae"),
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caf"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb0"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb1"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb2"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb3"),
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb4"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb5"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {

restaurants> load("C:\\Users\\HP\\OneDrive\\Máy tính\\Vix Phong\\2.js")
[
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca7"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca8"),
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0ca9"),
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caa"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Regina Caterers',
    restaurant_id: '40356649'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cab"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Taste The Tropics Ice Cream',
    restaurant_id: '40356731'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cac"),
    borough: 'Bronx',
    cuisine: 'American ',
    name: 'Wild Asia',
    restaurant_id: '40357217'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cad"),
    borough: 'Manhattan',
    cuisine: 'American ',
    name: '1 East 66Th Street Kitchen',
    restaurant_id: '40359480'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cae"),
    borough: 'Brooklyn',
    cuisine: 'Chinese',
    name: 'May May Kitchen',
    restaurant_id: '40358429'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0caf"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'C & C Catering Service',
    restaurant_id: '40357437'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb0"),
    borough: 'Brooklyn',
    cuisine: 'Jewish/Kosher',
    name: 'Seuda Foods',
    restaurant_id: '40360045'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb1"),
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb2"),
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb3"),
    borough: 'Staten Island',
    cuisine: 'Jewish/Kosher',
    name: 'Kosher Island',
    restaurant_id: '40356442'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb4"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Sal'S Deli",
    restaurant_id: '40361618'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb5"),
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb6"),
    borough: 'Manhattan',
    cuisine: 'Delicatessen',
    name: "Bully'S Deli",
    restaurant_id: '40361708'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb7"),
    borough: 'Queens',
    cuisine: 'Delicatessen',
    name: "Steve Chu'S Deli & Grocery",
    restaurant_id: '40361998'
  },
  {
    _id: ObjectId("645a2908bb31ded6e1dc0cb8"),
    borough: 'Manhattan',
    cuisine: 'Chicken',
    name: "Harriet'S Kitchen",
    restaurant_id: '40362098'
  },
  {
 */