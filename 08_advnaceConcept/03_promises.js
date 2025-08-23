// const promise1= new Promise(function(resolve, reject){

//     setTimeout(()=>{
//         // console.log('executed')
//         resolve()//this function call determines that the Promise executed suecsefully
//     }, 1000)

// })

// promise1.then(function(){ //then function is associate with resolve , means it only execute when resolve gets call

//     // console.log(' Promise consumed ')
    
// })

// //above way is a way where we store promise in varible 
// // ************************************************************

// //direct methord without storing in variable

// new Promise(function  (resolve,reject){

//     setTimeout(()=>{
//         // console.log('got excecuted without variable')
//         resolve()
//     }, 1000)
// }).then(function(){
//     // console.log('Promised Consumed sucsefully without Variable')
// })

// // *********************************

// //promise is use to generally get value form other function , device , webpages , network 
// //as resolve indicate that the data we want gets on not and also data need to be passed further for which resolve is used 


// const promise3 = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         resolve({name:'harshit Gupta', email:'emailOfharsh@gmail.com'})//generally we pass objects through resolve but its not compulsory
//     }, 1000)
// })

// promise3.then((obj)=>{
//     // console.log(obj.name) //this is how data get passed
// })


// //******************************************** */

// //now we will see rejection case 

// const promise4 = new Promise((resolve, reject)=>{

//     const error = false

//     setTimeout(()=>{
//         if(!error){
//         //resolve
//         // console.log(' Resolve executed')
//         resolve({name:"harshit", class:"topClass"})
//         }else{
//         reject(' ERROR : Something Went Wrong ')
//         }
//     },1000)
 
// })

// promise4.then((data)=>{
//     const userData= data
//     return userData
// }).then((userData)=>{
//     // console.log(userData.name) //by chaining (2 or more then join in ) only return data can be used 
// }).catch((message)=>{
//     // console.log(message)// it is used to handle error case 
// }).finally(()=>{
//     // console.log('Finally execute irespective of RESOLVE or REJECT')
// }) // any no of "then" can be used 

// ****************************************************


//now we try to use async function to handle 
// const promise5 = new Promise((resolve , reject)=>{

//     const error =false
//     setTimeout(()=>{

//         if(!error){
//             resolve({name:"Chai Or Code", random:"kuchBhi"})
//         }else{
//             reject('ERROR:something went wrong')
//         }
//     }, 1000)
// })

//creating async without error handling
// async function consumePromise5(){
//     const response = await promise5
//     console.log(response) //it only works in no error case 
// }

// async function consumePromise5(){

//     try {
//         const response= await promise5
//         console.log(response )
//     } catch (error) {
//         console.log(error)
//     }
// }

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({name: 'harshit', roll:' 125'})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then((redon)=>{
//     console.log(redon.name)
// })

async function consumePromiseFive(){
    try {
        const response = await promiseFive //await is used becuase resopse from promiseFive take time to get its value 
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFive()

// **************************************************************

// using async function with fetch keyWord

// async function getAllUser (){
//     try 
//     {const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json() // conversion of data is not an instant process so awit is needed here

//     console.log(data.results[0].gender)
//     }catch{
//         console.log('ERROR: its an error')
//     }
// }

// getAllUser ()


//As we know fetch return promise[type of data structure ] as a result 

fetch('https://randomuser.me/api/').then(
    (responseAaya)=>{
        return responseAaya.json()
    }
).then((data)=>{
    console.log(data.results[0].nam)
}).catch((error)=>{
    console.log(error)
})

