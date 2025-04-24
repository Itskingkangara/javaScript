const date= new Date()

console.log(date.toString())
console.log(typeof (date))

const newDate= new Date(2023,20,22,12, 30 , 40 , 100)

console.log(newDate.toDateString())
console.log(newDate.toTimeString())

//new type of formatting
const newDateFormate= new Date("12-31-2002")

console.log(newDateFormate.toDateString())