class Trainer {
  name: string;
  experience: number;

  // Constructor to initialize properties
  constructor(name: string, experience: number) {
    this.name = name;
    this.experience = experience;
  }

  // Method to display trainer details
  introduce(): void {
    console.log(`Hi, I'm ${this.name} with ${this.experience} years of experience.`);
  }

  // Method with return type
  calculateSessions(): number {
    return this.experience * 75;
  }
}

// Create an instance of the Trainer class
const sushma = new Trainer("Jyoti", 16);

// Call the methods
sushma.introduce(); // Output: Hi, I'm Jyoti with 16 years of experience.
console.log(sushma.calculateSessions()); // Output: 1200