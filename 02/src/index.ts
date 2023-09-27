// class User {
//     email:string
//     name:string
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }

class User {

     private _courseCount = 1
   
    constructor( 
        public email:string,
        private name:string
        ){ 
    }

    get companyEmail():string{
        return `apple${this.name}.com`
    }

    get courseCount():number {
        return this._courseCount
    }

    set courseCount( courseCount){
        if(courseCount <= 1){
          throw new Error ('course must be a _courseCount > 1')
        }
        this._courseCount = courseCount
    }
}

let hitesh = new User("hitesh@gmail","hitesh")


