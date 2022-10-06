/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const firstFivePositiveNumbers = [1, 2, 3, 4, 5]

console.log(firstFivePositiveNumbers)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const user = {
  name: "John",
  surname: "Doe",
  email: "johndoe456@gmail.com",
  age: 23
}

console.log(user)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent whether you have or not a driving license.
*/

const checkLicense =
  user.age >= 18 ? "Has a driving license!" : "Does not have a driving license!"

console.log(checkLicense)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete user.age

console.log(user.age)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const user2 = {}

Object.assign(user2, user)

user2.email = "bensmith123@gmail.com"

console.log(user2)

if (user2.email === user.email) {
  console.log("The email addresses match!")
} else {
  console.log("The email addresses do not match!")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

const totalShoppingCart = [12, 4, 6, 9, 15]
let sum = 0

// 0 + 12 + 4 + 6 + 15
for (let i = 0; i <= totalShoppingCart.length - 1; i++) {
  sum = sum + totalShoppingCart[i]
}

console.log(sum)

if (sum > 50) {
  console.log("Total price is:", sum)
} else {
  console.log("Total price: ", sum + 10)
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

const blackFridayDiscount = 0.2
const newTotalCost = sum * blackFridayDiscount

console.log(newTotalCost)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const arrOfCars = [
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" }
]

console.log(arrOfCars)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37543" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37544" },
  { brand: "Volkswagon", model: "Golf", licensePlate: "6G37545" }
]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log(carsForRent.shift())
console.log(carsForRent)

console.log(carsForRent.pop())
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

for (let i = 0; i < carsForRent.length; i++) {
  const cars = arrOfCars[i]
  console.log("CAR: " + (i + 1), cars.brand, cars.licensePlate)
}

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = []

for (let i = 0; i < carsForSale.length; i++) {
  const cars = arrOfCars[i]
  console.log("CAR: " + (i + 1), cars.brand, cars.model, cars.licensePlate)
}

console.log(carsForSale)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
