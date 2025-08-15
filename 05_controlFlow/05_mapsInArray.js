//using .map becz it return value automatically 

let nums=[1,2,3,4,5,6,7,8,9]

let store1 =nums.map( (item )=> {
    return item // return all the value respect to item 
})

let store2 =nums.map( (item )=> {
    return item>5 // check conditon and return true or false unlike the filter 
})

//console.log(store) 

//chaning -- when 2 or more metord use simantaneouly 

let store3= nums.map( (item) => item*3) . map((items) => items+1) //left one execute first than its value pass to right one 

//different metord like filter , map and other can be clubbed in chaning

console.log(store3)
