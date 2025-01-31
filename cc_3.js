//Task 1 - Product Price Management 
let prices = [21, 22, 23, 24, 25]; //declaring an array prices with five number values
console.log("Current Prices: ", prices);
prices.push(26); //adding a new price to the array
prices.shift(); //removing the first price from the array
console.log("Updated Prices: ", prices); //printing updated prices after adding and removing

//Task 2 - Modifying Customer Orders
let orders = [120, 140, 160, 180, 200]; //declaring an array orders with five values 
console.log("Customer Orders: ", orders);
orders[2] = 160 +5; //adding 5 to the third order
console.log("Updated Customer Orders: ", orders);
let totalOrders = orders.reduce((sum, amount) => sum+amount, 0); //calculating the sum of all orders
console.log("Total Customer Orders: ", totalOrders);

//Task 3 - Employee Performance Tracking
let employee //declaring an object with properties
    {
        name : "TinkerBell",
        role = "Engineer", 
        performanceScore = 62,
        isActive = true
    };
    console.log("Employee: ", employee);
    employee.performanceScore = 84; //updating performance score
    console.log("Updated info: ", employee);
    employee.promotionalEligible = true; //adding a new property 
        if(employee.performanceScore > 75) //if-else statement to determine promotion eligibility based on performance score
        {
            console.log("Eligible for promotion!");
        } else 
            {
                console.log("Not eligible for promotion.");
            }
    console.log("Updated info: ", employee);

