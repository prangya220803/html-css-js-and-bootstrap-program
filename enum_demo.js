var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["InProgress"] = "IN_PROGRESS";
    Status1["Complete"] = "COMPLETE";
})(Status1 || (Status1 = {}));
console.log(Status1.Pending); // Output: PENDING
console.log(Status1.InProgress); // Output: IN_PROGRESS
console.log(Status1.Complete); // Output: COMPLETE
console.log(Object.keys(Status1));
console.log(Object.values(Status1));
