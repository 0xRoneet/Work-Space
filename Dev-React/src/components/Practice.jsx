import React from "react";

// Define a class with a constructor (JavaScript/React version)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the details of the person
  displayDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// React component that demonstrates object creation using constructor
const Practice = () => {
  // Create an object of the Person class using the constructor
  const person1 = new Person("John", 25);
  const person2 = new Person("Jane", 30);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>JavaScript Object Creation Example</h2>
      <p>
        Here is an example of how to create an object using a constructor in
        JavaScript/React.
      </p>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "5px",
          margin: "10px 0",
        }}
      >
        <h3>Person Details:</h3>
        <p>{person1.displayDetails()}</p>
        <p>{person2.displayDetails()}</p>
      </div>

      <div
        style={{
          backgroundColor: "#e8f4fd",
          padding: "15px",
          borderRadius: "5px",
          margin: "10px 0",
        }}
      >
        <h4>Code Example:</h4>
        <pre
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "3px",
            overflow: "auto",
          }}
        >
          {`class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        return \`Name: \${this.name}, Age: \${this.age}\`;
    }
}

// Create objects
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);`}
        </pre>
      </div>
    </div>
  );
};

export default Practice;
