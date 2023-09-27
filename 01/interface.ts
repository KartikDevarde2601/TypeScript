interface User {
    email : string
    userId:number
    freeTrail():string
    getCoupon(couponame:string):number
}

interface User {
    gitHubToken: string
}

interface Admin extends User {
    role:string
}

const hitesh: User = {
    email:"h@hitesh.com",
    userId:44949,
    gitHubToken:"44t56446",
    freeTrail:()=>{
        return "freeTrails Active"
    },

    getCoupon:( couponame:"diwali") =>{
        return 40
    }
}

export{}