let score : number | string = 343
score = 332
score = "343"


type User = {
    name:string
    email:string
}

type Admin = {
    AdminName:string
    email:string
}

let hitesh: User | Admin = {
    name:"hitesh",
    email:"hitesh@gmail.com"
}

hitesh = {
    AdminName:"hitesh",
    email:"hitesh@gmail.com"
}


// function getDbId(id:number | string){
//     console.log(id)
// }

getDbId("kartik")
getDbId(45)


function getDbId(id:number | string){
    // id.toUpperCase() // problem
    if ( typeof id === "number") {
        id.toFixed()
    }
    
 }


 const data : number[] | string[] = [2,3,4,4]

//  const data2 : number[] | string[] = [2,3,4,"5"] problem



export{}