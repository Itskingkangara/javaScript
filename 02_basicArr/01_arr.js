const arr=[0,1,"Harsh", true] //in arr diff data type can be used 

//shallow copy 
//change in elment will change the arr for eg if element no 3 get changed than arr's element will also change
arr[3]=0

console.log(arr[3])


//another way of declaration
let newArray = new Array(1,2,3,4,5,6,7,8,9)

// console.log(newArray[4])
newArray.unshift(9) //add element in start
console.log(newArray)

newArray.shift() //removes 1st element of arr 

//although they are not considered as good practice becz the hole arr need to be shift 
console.log(newArray)
let joinFunction = newArray.join();

console.log(joinFunction) //converts function into string 

 