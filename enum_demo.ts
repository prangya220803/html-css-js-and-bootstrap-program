enum Status1 {
Pending = 'PENDING',
InProgress = 'IN_PROGRESS',
Complete = 'COMPLETE'
}

console.log(Status1.Pending); // Output: PENDING
console.log(Status1.InProgress); // Output: IN_PROGRESS
console.log(Status1.Complete); // Output: COMPLETE
console.log(Object.keys(Status1)); 
console.log(Object.values(Status1)); 