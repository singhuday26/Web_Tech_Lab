# Experiment 7: MongoDB CRUD Operations

This experiment demonstrates CRUD (Create, Read, Update, Delete) operations in MongoDB using a university database.

## Objective
Perform CRUD operations on a `Students` collection in the `University_DB` database.

## Document Structure
Each student document contains:
- `rollNumber` (Number)
- `name` (String)
- `age` (Number)
- `cgpa` (Number)

## Files
- `queries.js`: MongoDB shell queries for all required tasks.

## How to Run
1. Open MongoDB shell (`mongosh`).
2. Execute commands from `queries.js` step-by-step, or load the file.

Example:
```bash
mongosh
```
Then run queries directly in the shell.

## Output / Screenshots (For Lab Submission)
Capture terminal screenshots after each checkpoint below and paste them in your report.

### Checkpoint 1: Database and Collection Creation
- Run:
```javascript
use("University_DB");
db.createCollection("Students");
show dbs;
show collections;
```
- Screenshot should show `University_DB` and `Students` collection.

### Checkpoint 2: Initial Inserts
- Run inserts for Alice, Bob, Charlie, David, Eve, and Frank.
- Verify:
```javascript
db.Students.find().pretty();
```
- Screenshot should show all inserted student documents.

### Checkpoint 3: Read Queries
- Run and capture outputs for:
```javascript
db.Students.find();
db.Students.find({ name: "Alice" });
db.Students.find({ age: { $gt: 20 } });
db.Students.find({ cgpa: { $gt: 8.0 } });
db.Students.find({ cgpa: { $gte: 7.5, $lte: 9.0 } });
```

### Checkpoint 4: Update Queries
- Run:
```javascript
db.Students.updateOne({ name: "Alice" }, { $set: { cgpa: 8.7 } });
db.Students.updateMany({ cgpa: { $lt: 8.0 } }, { $inc: { cgpa: 0.2 } });
db.Students.find().pretty();
```
- Screenshot should show Alice with updated CGPA and incremented CGPA for qualifying students.

### Checkpoint 5: Delete Queries
- Run:
```javascript
db.Students.deleteOne({ name: "Bob" });
db.Students.deleteMany({ cgpa: { $lt: 7.5 } });
db.Students.find().pretty();
```
- Screenshot should show Bob removed and no student with CGPA less than 7.5.

## Suggested Screenshot File Names
- `01_db_and_collection.png`
- `02_initial_inserts.png`
- `03_read_queries.png`
- `04_update_queries.png`
- `05_delete_queries.png`
