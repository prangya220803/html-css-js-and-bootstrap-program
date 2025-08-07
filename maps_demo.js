// Declare a Map with string keys and number values
var scores = new Map();
// Add values
scores.set("Alice", 95);
scores.set("Bob", 82);
scores.set("Charlie", 100);
// Get a value by key
console.log(scores.get("Alice")); // Output: 95
// Check if a key exists
console.log(scores.has("Bob")); // Output: true
// Iterate over entries
for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
    var _a = scores_1[_i], name_1 = _a[0], score = _a[1];
    console.log("".concat(name_1, " scored ").concat(score));
}
// Remove an entry
scores.delete("Bob");
// Map size
console.log(scores.size); // Output: 2
//clear all entries
scores.clear();
console.log(scores.size); //output 0
