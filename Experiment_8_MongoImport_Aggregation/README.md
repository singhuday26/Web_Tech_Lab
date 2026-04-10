# Experiment 8: Mongo Import and Aggregation Pipeline

This experiment demonstrates importing a ZIP code dataset into MongoDB and solving aggregation problems.

## Dataset
Download the dataset from:
http://media.mongodb.org/zips.json

Save it as:
`C:\Users\Downloads\zips.json`

## MongoDB Database Tools Installation
1. Download MongoDB Command Line Database Tools:
   https://www.mongodb.com/try/download/database-tools
2. Install tools.
3. Assume installed path:
   `C:\mongodb-database-tools\bin`

## Import Process (Windows CMD)
1. Open Command Prompt.
2. Move to tools directory:
```bat
cd C:\mongodb-database-tools\bin
```
3. Import JSON file into MongoDB:
```bat
mongoimport --db country --collection zipcodes --file C:\Users\Downloads\zips.json
```

If needed, use full executable path:
```bat
"C:\mongodb-database-tools\bin\mongoimport.exe" --db country --collection zipcodes --file "C:\Users\Downloads\zips.json"
```

## Verify Import in Mongo Shell
```javascript
mongosh
use country
db.zipcodes.find().limit(5)
```

## Aggregation Queries
Use the commands from `aggregation_queries.js`.

## Expected Tasks
1. Find all states that have a city called "BOSTON".
2. Find all states and cities whose names include "BOST".
3. Count zip codes and population for each city in each state.
4. Find the city with the maximum zip codes in each state and rank by population.

## Output / Screenshots (For Lab Submission)
Capture terminal screenshots after each checkpoint and add them to your report.

### Checkpoint 1: File Download and Import
- Download `zips.json` from the given URL.
- Run:
```bat
cd C:\mongodb-database-tools\bin
mongoimport --db country --collection zipcodes --file C:\Users\Downloads\zips.json
```
- Screenshot should show import success with number of documents imported.

### Checkpoint 2: Import Verification
- Run in `mongosh`:
```javascript
use country
db.zipcodes.find().limit(5)
```
- Screenshot should show sample documents from `zipcodes` collection.

### Checkpoint 3: Query (i)
- Run:
```javascript
db.zipcodes.aggregate([
   { $match: { city: "BOSTON" } },
   { $group: { _id: "$state" } },
   { $sort: { _id: 1 } }
]);
```
- Screenshot should show all states containing city `BOSTON`.

### Checkpoint 4: Query (ii)
- Run:
```javascript
db.zipcodes.aggregate([
   { $match: { city: /BOST/ } },
   { $group: { _id: { state: "$state", city: "$city" } } },
   { $sort: { "_id.state": 1, "_id.city": 1 } }
]);
```
- Screenshot should show all matching state-city pairs containing `BOST`.

### Checkpoint 5: Query (iii)
- Run:
```javascript
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
```
- Screenshot should show `zipCodeCount` and `totalPopulation` for each city in each state.

### Checkpoint 6: Query (iv)
- Run:
```javascript
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
```
- Screenshot should show one city per state with maximum zip code count and population ranking.

## Suggested Screenshot File Names
- `01_import_success.png`
- `02_verify_import.png`
- `03_query_i_boston_states.png`
- `04_query_ii_bost_matches.png`
- `05_query_iii_city_counts_population.png`
- `06_query_iv_max_zip_city_ranked.png`
