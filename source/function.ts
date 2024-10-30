// function two types
    // 1.Normal Function
    // 2.Arrow Function

// Normal function 
function add(a:number, b:number=10){
    return a + b;
}


// Arrow Function 
const addArrow = (a:number,b:number): number => a+b;


// object --> function --> Method

const poorUser ={
    name: "shanto ",
    balance:25,
    // anonymous Function
    addBalance(balance:number) :string {
        return `My new balance is ${this.balance + balance}`
    }
}


// Array Function 
const arr:number[] = [1,2,3]
const newArray:number[] = arr.map((element :number):number=> element*element)

