// 1. Create a string variable called `fruits` with this value:
   //`"Apple, Banana, Grape, Mango, Orange"`

 let fruits = "Apple, Banana, Grape, Mango, Orange"
   console.log(fruits)

// 2. Do the following tasks:
   //1. Print the **length** of the string.
   //2. Convert the string to **uppercase** and print it.
   //3. Convert the string to **lowercase** and print it.
   //4. Convert the string into an **array of fruits** (split by comma) and print the array.
   //5. Replace `"Banana"` with `"Strawberry"` in the string and print it.
   //6. Use a **ternary operator** to check if the string contains `"Grape"`:
       //If yes, print `"Grape is in the list"`
       //If no, print `"Grape is not in the list"`
//Optional Challenge
//Repeat the string  2 times and print the result.
console.log(fruits.length)

let Upper_fruits=fruits.toUpperCase()
console.log(Upper_fruits)

let Lower_fruits=fruits.toLowerCase()
console.log(Lower_fruits)

let array_of_fruits=fruits.split(", ")
console.log(array_of_fruits)

let replace_fruits=fruits.replace("Banana", "Strawberry")
console.log(replace_fruits)

fruits.includes("Grape") ? console.log("Grape is in the list") : console.log("Grape is not in the list")


//Optional Challenge

let repeat_fruits = fruits.includes("Grape") ? "Grape is in the list" : "Grape is not in the list"
console.log(repeat_fruits.repeat(2))
