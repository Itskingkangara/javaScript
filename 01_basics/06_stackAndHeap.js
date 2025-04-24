//for stack memory which is permitive and use call by value 

let a="abc"
let b=a

b="cba"

console.log(a, b)

//heap call by reference

let c={
    email : "abs@gmail.com"
}

let d=c;

d.email="You are Hacked"

console.log(c, d)//due to stack memory which introduce pass by refrence both values get changed by changing one value

let e=d; 

e.email= " another time you are hacked "

console.log(e); 
console.log(c); 



