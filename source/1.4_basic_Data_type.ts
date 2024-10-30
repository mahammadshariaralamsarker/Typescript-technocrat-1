// --------------------Primitive Data Types------------------
// String 
let FirstName: string = "shto ";


// number
let roll:number = 23;


// boolean
let isAdmin: boolean = true;

// undefined 
let x:undefined = undefined;

// null
let y:null = null



//  ------------------------Non Primitive Data types------------------
// array
let friends:string[] = ['rachel', 'Monica']
let eligibleRoll:number[] = [1,2,3,4]

// tuple-->one kinds of array-->data type ordered properly-->type of values 
let coordinate :[number,string] = [1,"mr x"]

// object 

//  1.object in implicit way
 const userInfo ={
    firstName: "mahammad ",
    middleName: "shariar",
    lastName: "alam "
 }

//   2.object in explicit way
    const userInfo2:{ 
        firstName?:string;   //optional type 
       middleName:string;
       lastName:string;
       programmer:"YES"     //Literals type
    } ={
            middleName: "shariar",
            lastName: "alam",
            programmer:'YES'
    }






