const User = {
    name:'karik',
    email:"katik@gmail.com",
    isActive:true
}

function createUSer({name:string,ispaid:boolean}){

}

createUSer({name:"kartik",ispaid:false})


function createCourse():{name:string,price:number
}{
    return {name:'java',price:34}
}

type User ={
    name:string;
    email:string;
    isactive:boolean
}

function createUserX (user:User):User{
return {name:"", email:"", isactive:true}
}

createUserX({name:"", email:"", isactive:true})

type courseUser ={
     readonly _id:string
    name:string
    email:string
    isActive:boolean
    finacialAssitant ?: boolean
}

let myUser : courseUser = {
  _id:"23433",
    name:"kartik",
    email:"kartik@k.gmail",
    isActive:true,
}

myUser.isActive= false;
// myUser._id=8484


type card ={
    creditNumber:string
}

type cardDate ={
    date:string
}

type cardDetails = card & cardDate & {
    cvv:number
}

let myCard : cardDetails ={
    creditNumber:"48587587585555",
    date:"02/34",
    cvv:344
}


export{}