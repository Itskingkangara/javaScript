// **************FOR EACH LOOP *******************

//it is not like c++ for each loop
//syntax

let coding= ["arr", "function", "objects"]

coding.forEach( function (value){ //it use callBack function in which name of function not define and value get passed to perform function for that particular value 

    // console.log(value)
})

//for each loop using arrow functions

coding.forEach((value) => {

    // console.log(value)
})

//function declaration somewhere else 

    let useInloop = function(value){
        // console.log(value)
    }

    coding.forEach(useInloop)

//for each loop have acess to item index as well as whole array

coding.forEach((value, index, arr )=>{
    // console.log(value, index, arr)
})

//arr of objects

let newCoding = [
    {name: "Harshit", 
     rollNo: 46
    }, 

    {name: "anshu", 
     rollNo: 42
    },

    {name: "aakash", 
     rollNo: 40
    }
]

newCoding.forEach( (item)=>{

    console.log(item.name , "have " , item.rollNo)
})



