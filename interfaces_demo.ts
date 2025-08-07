interface User {
  name: string;
  age: number;
}

const alice1: User = {
  name: 'Alice',
  age: 30
};

console.log(`User: ${alice1.name}, Age: ${alice1.age}`); // Output: User: Alice, Age: 30