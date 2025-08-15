//for each loop do not return value for eg 

let nums = [1,2,3,4,5,6,7,8,9]

let store= nums.forEach( (item)=>{
    return item 
})



// console.log(store)//as for each loop do not return value we use filter 



//** FILTER **
store = nums.filter( (item )=> item>=5)// it also use call back function with condition right side showing condition 

//above is a direct return way



store= nums.filter( (item) => {
    return item >=4
})

console.log(store)

//this above thing using for each loop 

let temp= []

nums.forEach( (items) =>{

    if(items>=4){
        temp.push(items)
    }
})

console.log(temp)