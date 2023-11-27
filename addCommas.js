function addCommas(number) {
    // Convert the number to a string
    let numString = number.toString();
  
    // Split the string into integer and decimal parts (if any)
    const parts = numString.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] ? `.${parts[1]}` : '';
  
    // Add commas to the integer part
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the integer and decimal parts
    const formattedNumber = formattedInteger + decimalPart;
  
    return formattedNumber;
  }
  
  // Tests
  console.log(addCommas(1234));            // Expected Output: "1,234"
  console.log(addCommas(1000000));         // Expected Output: "1,000,000"
  console.log(addCommas(9876543210));      // Expected Output: "9,876,543,210"
  console.log(addCommas(6));                // Expected Output: "6"
  console.log(addCommas(-10));              // Expected Output: "-10"
  console.log(addCommas(-5678));            // Expected Output: "-5,678"
  console.log(addCommas(12345.678));       // Expected Output: "12,345.678"
  console.log(addCommas(-3141592.65));     // Expected Output: "-3,141,592.65"
  