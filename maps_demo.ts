// Declare a Map with string keys and number values
let scores: Map<string, number> = new Map();

// Add values
scores.set("Alice", 95);
scores.set("Bob", 82);
scores.set("Charlie", 100);

// Get a value by key
console.log(scores.get("Alice")); // Output: 95

// Check if a key exists
console.log(scores.has("Bob")); // Output: true

// Iterate over entries
for (let [name, score] of scores) {
  console.log(`${name} scored ${score}`);
}

// Remove an entry
scores.delete("Bob");

// Map size
console.log(scores.size); // Output: 2

//clear all entries
scores.clear();
console.log(scores.size); //output 0