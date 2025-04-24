const arr1=[1,2,3,4]
const arr2=['a','b','c','d']

// arr1.push(arr2)

// console.log(arr1) //as array supports multiple data type it accepted whole array as a input

const mergeArr = arr1.concat(arr2)

// console.log(mergeArr) //HELP to merge 2 arr

//if we want to merge more than 2 arr than it work like this

// console.log(...arr1, ...arr2, ...mergeArr)

let nestedArr= [1,2,3,['a','b','c',['ab','bc','ca']],5]

let unNested=nestedArr.flat(2) //flat use when arr of arrays given 
//console.log(unNested)        //2 represent which level of unnesting required 


// *******************************************

//different functions of arr
//when Input is not arr and you want to check and convert it into array
console.log(Array.isArray("Harshit"))
const arr=[1,2,3,4,5,6]
console.log(Array.isArray(arr))

const name="Harshit"
console.log(Array.from(name)) //converts any data type into Array and if not possible then return empty Array

// //exceptional case
console.log(Array.from({name: "Harshit"})) //it returns empty array

console.log(Array.of(1,2,3,4,5,6,'a','b'))

let check= {
    name : " harshit ",
    age  : 25
}

console.log(Array.from(check)) // objects cannot be converted into Array

console.log(Array.from( check.name))



