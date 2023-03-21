/*Javascript: Array Methods | Mutating vs Non-Mutating
Mutating methods are ones that change the object after the method has been used. 
Non-mutating methods do not change the object after the method has been used.
The count and index methods are both non-mutating.
Count returns the number of occurrences of the argument given but does not change the original string or list.

Add: Mutating
The easiest way to add an item to array is array.push() and array.unshift().

// Note: using `let` here to indicate that this array will be mutated. 
let array = [1, 2, 3, 4, 5];
array.push(6); // [1, 2, 3, 4, 5, 6];
array.unshift(10);// [10, 1, 2, 3, 4, 5, 6];
array.push() adds an item to the end and array.unshift() adds an item to the front of the array.

Add: Non-Mutating
There are two ways to do so array.concat() and …array spread operator.

// Note use `const` to indicate that this will not be mutated
const array1 = [1, 2, 3, 4, 5];
const array2 = array.concat(6); // [1, 2, 3, 4, 5, 6];
const array3 = [...array1, 6]; // [1, 2, 3, 4, 5, 6];
const array4 = [10, ...array1]; // [10, 1, 2, 3, 4, 5];
array1.concat(item1, item2, …) the concat method will merge all items from array1 and items passed as params and create a new array with them. While the … spread operator will essentially take all items out from array and place them in a new context.

Remove: Mutating
There are two methods array.pop() and array.shift()

let array = [1, 2, 3, 4, 5];
array.pop(); // [1, 2, 3, 4] > delete from end and return deleted item
array.shift(); // [2, 3, 4]  > delete from front and return deleted item
array.pop() delete an item from the end and return deleted item. array.shift() delete an item from the front and return deleted item.

There is one important method to manipulate array i.e array.splice(). It mutates the array. splice() takes 2 important params, first being the starting index and second being the number of items to be removed. splice will remove items from array directly. for eg. splice(0, 2) will remove two items starting from index 0.

let array = [1, 2, 3, 4, 5];
array.splice(0, 2);// [3, 4, 5];
Remove: Non-Mutating
The removing or any type of filtering is done by array.filter(), the filter() is among the coolest non-mutating method on the array. It takes a function that is called over each item in the array during that it has to do some filtering where if it returns true then the item will be included in new array and return false if items has to be thrown away.

const array1 = [1, 2, 3, 4, 5];
const array2 = array1.filter((item) => item !== 5); 
// will filter any item i.e not equal to 5
Another very important method is array.slice(). Remember this is not array.splice(), they are different array.slice() will return new array i.e its is not mutating. It is very similar to slice for how its is used. It takes 2 important params, the first is starting index where copying should begin and second is end index where copy should end, it is not inclusive. It copy items between those index and returned them in a new array.

const array1 = [1, 2, 3, 4, 5];
const array2 = array1.slice(0, 2); // [1,2];
// if no args provided ti  will copy the whole array
Replace: Mutating
Array splice method is very interesting method because not only it can remove items but also add items to the array directly. The third parameters and onwards basically mean items that need to be inserted to array.

let array = [1, 2, 3, 4, 5];
array.splice(2, 1, 10, 12); // [1, 2, 10, 12, 4, 5];
splice will remove 1 item starting index 2 and then insert 10 and 12 from the same position.

//Replace | Transform: Non-mutating
//The mighty method array.map() is very useful as it can transform array. Map method takes a function that is called on each item of the array and it must return an item that has to be put into the new array.

const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map((item) => {
  if (item === 3) {
    return 10;  
  }
  return item;
}); // [1, 2, 10, 4, 5];
// Map as transformation
const mutilpliedByTwo = array1.map((item) => item * 2); 
// [2, 4, 6, 8, 10]; 
*/

//QUESTION 2

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
//Add Kotlin to the end of the array
languages.push('Kotlin');
console.log(languages);
//Add'Java' after 'Ruby'
languages.splice(3, 0 ,'Java');
console.log(languages);
//Rempove the first item in the array
languages.shift();
console.log(languages);
//Add scala and swift to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);
//Replace 'PHP' with Go and Run
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

//QUESTION 3
 let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit )
         {fruit[2] = "orange";
    			return fruit;
            }

            fruit = changeFruit(fruit);  

		console.log(fruit);
    //When the changeFruit function is called with the fruit array as an argument, 
    //the function modifies the third element of the array (index 2) to "orange"
    // using the assignment statement fruit[2] = "orange"
    
//value of fruit will be  ['apple','mango', 'orange']
//This is because the changeFruit function modifies the original fruit array by changing the third element to "orange", and the function returns itself (not the modified array),
// but since the original fruit array is passed by reference, the modifications made by the function will be reflected in the original fruit array.


//QUESTION 4
const numbers = [4,-2,5,6,-7,8,1,-9,10];
const max = numbers.reduce((a,b) => Math.max(a,b), -Infinity);
console.log(Math.max(...numbers));

//QUESTION 5

  function valTimesIndex(arr) {
    // Create an empty array to store the result
    const result = [];
  
    // Iterate through the input array using a for loop
    for (let i = 0; i < arr.length; i++) {
      // Multiply each value in the array by its index and push the result to the new array
      result.push(arr[i] * i);
    }
  
    // Return the new array
    return result;
  }
  
const inputArray = [1,3,5];
const outputArray = valTimesIndex(inputArray);
console.log(outputArray);

// Output: [0, 3, 10]



//9/03/23
//initial value of the counter
let count  = 0

//get all the elements we want to work with
let displayElement = document.getElementById("display");

//this decreases the count by 1
//and assigns the value of count to the display element
function decreaseCount() {
  count--;
  displayElement.textContent = count;
}

//this resets the count to zero 
//and assigns the value of count to the display elememnt
function resetCount() {
  count = 0
  displayElement.textContent = count;
}

increaseButtonElement.addEventListener("Click", increaseCount);
increaseButtonElement.addEventListener("Click", decreaseCount);
increaseButtonElement.addEventListener("Click", resetCount);

//create a simple TODO list that has the following functionalities

/**
 * add a new item to the todo list
 * edit an item in the todo list
 * remove an item in the todo list
 * 
 * further requirements:
 * the input field must be reset when the add button is clicked on
  - The todo list must show the most recent first
*/

let todoList =["host a live stream"]
// to add to the todo list
function addItem() {

}

function editItem (item){

}

function deleteItem (item){

}
