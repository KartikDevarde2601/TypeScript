"use strict";
// class User {
//     email:string
//     name:string
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    get companyEmail() {
        return `apple${this.name}.com`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseCount) {
        if (courseCount <= 1) {
            throw new Error('course must be a _courseCount > 1');
        }
        this._courseCount = courseCount;
    }
}
let hitesh = new User("hitesh@gmail", "hitesh");
