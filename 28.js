a = db.restaurant.find({ "address.street": { $exists: false } }).count();
print("all the addresses contains the street:", a==0);
