
const numbers = [12, 25, 46];

const createFunction = (number) => {
  const functionName = `Function${number}`;

  // Create a function and attach it to the global scope (window)
  window[functionName] = () => {
    console.log(`${functionName} is called`);
    // Add your logic here
  };
};

// Create functions dynamically
numbers.forEach((number) => createFunction(number));

// Example usage:
Function12();