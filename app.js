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
const totalPrice = 0
const expensiveItemCount = 0
//For Each Function
prices.forEach((price) => {
    totalPrice += price
    if (expensiveItemCount=(price>=4)) {
        console.log(`Items costing 4 or more: 3' ${expensiveItemCount}`)
    }
})

////////////////////////////////////////////////////////
//Excercise 5


////////////////////////////////////////////////////////
//Excercise 6


////////////////////////////////////////////////////////
//Excercise 7 
