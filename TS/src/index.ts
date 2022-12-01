let x: number= 10

x = 25

console.log(x)

//Inference and annotation

let y= 8

let z: number = 10

//tipos basicos
let firstName: string = "Roberto"
let age: number  = 22
let isAdmin: boolean = true
console.log(firstName)

//object

const myNubers: number[]= [1, 2,3]

console.log(myNubers)
console.log(myNubers.length)
myNubers.push(5)

console.log(myNubers)

//tuplas

let myTuple: [number, string, string[]]

myTuple = [10, "teste", ["a", "b"]]

//object literals ->  {prop: value} 
const user: {name: string, age: number} ={
    name: "Roberto",
    age: 22
}

console.log(user)

//any
let b: any = 0;

b = 1;

console.log(b)

//union type

let id: string | number = "10"

id = 200

//alias type

type myIdType = number  | string

const userId: myIdType = 10

// enum

enum Size{
    P= "Pequeno",
    M= "Médio",
    G= "Grande",
}

const camisa = {
     name: "Camisa gola V",
     size: Size.P,

}

console.log(camisa)



