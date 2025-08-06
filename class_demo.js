var Trainer = /** @class */ (function () {
    // Constructor to initialize properties
    function Trainer(name, experience) {
        this.name = name;
        this.experience = experience;
    }
    // Method to display trainer details
    Trainer.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, " with ").concat(this.experience, " years of experience."));
    };
    // Method with return type
    Trainer.prototype.calculateSessions = function () {
        return this.experience * 75;
    };
    return Trainer;
}());
// Create an instance of the Trainer class
var sushma = new Trainer("Jyoti", 16);
// Call the methods
sushma.introduce(); // Output: Hi, I'm Jyoti with 16 years of experience.
console.log(sushma.calculateSessions()); // Output: 1200
