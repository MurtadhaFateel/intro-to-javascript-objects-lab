//Part 1: Arrays
// Excercise 1: Read the menu
const menuItems = ['Tea', 'Coffe', 'Sandwich', 'Cookie']

// console.log(menuItems[0])
// console.log(menuItems[2])
// console.log(menuItems.length)
// console.log(menuItems[3])

////////////////////////////////////////////////////////
//Excercise 2: Update the waiting list
const waitingCustomers = ['Aisha', 'Omar', 'Noor']
//1. Replace 'Omar' with 'Ali' using an index.
waitingCustomers[1] = 'Ali'
//2. Add 'Dana' to the end using push()
waitingCustomers.push('Dana')
//3. Log the number of customers. It should now be 4
// console.log(waitingCustomers.length)
//4. Remove the last customer using pop() and store the returned value in removedCustomer.
const removedCustomer = waitingCustomers.pop([]) 
//5. removedCustomer
// console.log(removedCustomer)
//6. Log the final array
// console.log(waitingCustomers)

////////////////////////////////////////////////////////
//Excercise 3: Print a numbered menu
const drinks = ['Water', 'Tea', 'Coffee', 'Juice']
for (let i=0; i<drinks.length; i++) {
    // console.log(`${i+1}. ${drinks[i]}`)
}

////////////////////////////////////////////////////////
//Exercise 4: Calculate the prices
const prices = [2, 5, 3, 6, 4]
let totalPrice = 0
let expensiveItemCount = 0
//For Each Loop/count Function
// Use an array iteration method to loop through prices and calculate totals
prices.forEach((price) => {
    // Add current price to the running total
    totalPrice += price  
    if (price>=4) {
        //Adds a counter based on how many (price>=4) it finds
        expensiveItemCount+=1
    }
})
prices.forEach(() => {

})
// console.log(`Total Price: ${totalPrice}`)
// console.log(`Items costing 4 or more: ${expensiveItemCount}`)

//Total price: 20
// Items costing 4 or more: 3


////////////////////////////////////////////////////////
// Part 2: Objects
//Excercise 5: Describe the café
const cafe = {
    name: 'Campus Café',
    location: 'Building A',
    seats: 24,
    isOpen: true,
}
if(cafe.isOpen===true){
    // console.log(`${cafe.name} is located in ${cafe. location}.`)
    // console.log(`Available seats: ${cafe.seats}`)
}

////////////////////////////////////////////////////////
//Excercise 6: Update a drink
const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
};

drink.size = 'Large'
drink.price+=1
drink.isAvailable=true
delete drink.temporaryCode
// console.log(drink)

////////////////////////////////////////////////////////
//Excercise 7: Check an order
const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: true,
};
//Total Price Price * Qty
let orderTotal = order.price*order.quantity

//Print order object using template literal notation
console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`)
console.log(`Order total: ${orderTotal}`)

//If Statment to check payment status and log status message 
if (order.isPaid===true) {
    console.log('Ready to prepare')
} else {
    console.log('Waiting for payment')
}


////////////////////////////////////////////////////////
//Part 3: Arrays & Objects Together
//Excercise 8

////////////////////////////////////////////////////////
//Excercise 9

////////////////////////////////////////////////////////
//Excercise 10
