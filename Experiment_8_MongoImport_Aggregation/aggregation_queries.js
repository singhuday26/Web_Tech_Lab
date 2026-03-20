// Experiment 8: Aggregation pipelines on country.zipcodes
// Collection: country.zipcodes

// (i) Find all states that have a city called "BOSTON"
db.zipcodes.aggregate([
  { $match: { city: "BOSTON" } },
  { $group: { _id: "$state" } },
  { $sort: { _id: 1 } }
]);

// (ii) Find all states and cities whose names include the string "BOST"
db.zipcodes.aggregate([
  { $match: { city: /BOST/ } },
  { $group: { _id: { state: "$state", city: "$city" } } },
  { $sort: { "_id.state": 1, "_id.city": 1 } }
]);

// (iii) Count zip codes and population for each city in each state
db.zipcodes.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      zipCodeCount: { $sum: 1 },
      totalPopulation: { $sum: "$pop" }
    }
  },
  { $sort: { "_id.state": 1, "_id.city": 1 } }
]);

// (iv) Find the city with maximum zip codes in each state and rank by population
db.zipcodes.aggregate([
  {
    $group: {
      _id: { state: "$state", city: "$city" },
      zipCodeCount: { $sum: 1 },
      totalPopulation: { $sum: "$pop" }
    }
  },
  { $sort: { zipCodeCount: -1, totalPopulation: -1 } },
  {
    $group: {
      _id: "$_id.state",
      city: { $first: "$_id.city" },
      maxZipCodeCount: { $first: "$zipCodeCount" },
      population: { $first: "$totalPopulation" }
    }
  },
  { $sort: { population: -1 } },
  {
    $setWindowFields: {
      sortBy: { population: -1 },
      output: {
        rankByPopulation: { $rank: {} }
      }
    }
  },
  {
    $project: {
      _id: 0,
      state: "$_id",
      city: 1,
      maxZipCodeCount: 1,
      population: 1,
      rankByPopulation: 1
    }
  }
]);
