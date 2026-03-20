// Experiment 7: Demonstrate CRUD operations using MongoDB

// i. Create / switch to Database University_DB
use("University_DB");

// ii. Create Collection Students (created automatically on first insert)
db.createCollection("Students");

// iii. Insert Documents
db.Students.insertMany([
  { rollNumber: 1, name: "Alice", age: 20, cgpa: 8.5 },
  { rollNumber: 2, name: "Bob", age: 21, cgpa: 7.8 },
  { rollNumber: 3, name: "Charlie", age: 19, cgpa: 9.0 }
]);

// iv. Insert David
db.Students.insertOne({ rollNumber: 4, name: "David", age: 22, cgpa: 8.2 });

// v. Insert multiple students: Eve and Frank
db.Students.insertMany([
  { rollNumber: 5, name: "Eve", age: 20, cgpa: 7.9 },
  { rollNumber: 6, name: "Frank", age: 23, cgpa: 8.0 }
]);

// vi. Find all students
db.Students.find();

// vii. Find student named "Alice"
db.Students.find({ name: "Alice" });

// viii. Find all students older than 20
db.Students.find({ age: { $gt: 20 } });

// ix. Find students with CGPA greater than 8.0
db.Students.find({ cgpa: { $gt: 8.0 } });

// x. Find students with CGPA between 7.5 and 9.0
db.Students.find({ cgpa: { $gte: 7.5, $lte: 9.0 } });

// xi. Update Alice's CGPA to 8.7
db.Students.updateOne({ name: "Alice" }, { $set: { cgpa: 8.7 } });

// xii. Increase CGPA by 0.2 for all students with CGPA less than 8.0
db.Students.updateMany({ cgpa: { $lt: 8.0 } }, { $inc: { cgpa: 0.2 } });

// xiii. Delete student named "Bob"
db.Students.deleteOne({ name: "Bob" });

// xiv. Delete all students with CGPA less than 7.5
db.Students.deleteMany({ cgpa: { $lt: 7.5 } });

// Optional verification after operations
db.Students.find();
