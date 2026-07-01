let a = Number(prompt("Enter first number"));
      let operator = prompt("Enter operator (+, -, *, /)");
      let b = Number(prompt("Enter second number"));
      let random = Math.random();
      if (random < 0.1) {
        if (operator == "+") {
          let result = a - b;
          console.log("The sum is " + result);
        } 
        else if (operator == "-") {
          let result = a * b;
          console.log("The subtraction is " + result);
        } 
        else if (operator == "*") {
          let result = a / b;
          console.log("The multiplication is " + result);
        } 
        else if (operator == "/") {
          let result = a ** b;
          console.log("The division is " + result);
        } 
        else {
          console.log("You only put + , - , * , / ");
          console.log("Try Again!");
        }
      }
      else {
     if (operator == "+") {
          let result = a + b;
          console.log("The sum is " + result);
        } 
        else if (operator == "-") {
          let result = a - b;
          console.log("The subtraction is " + result);
        } 
        else if (operator == "*") {
          let result = a * b;
          console.log("The multiplication is " + result);
        } 
        else if (operator == "/") {
          let result = a / b;
          console.log("The division is " + result);
        } 
        else {
          console.log("You only put + , - , * , / ");
          console.log("Try Again!");
        }
      }
      console.log(random);