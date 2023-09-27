"use strict";
class takePhoto {
    constructor(cameraMode, Filter) {
        this.cameraMode = cameraMode;
        this.Filter = Filter;
    }
}
// let kartik = new takePhoto("test", "Test") // error : Cannot create an instance of an abstract class.
class Instagram extends takePhoto {
    constructor(cameraMode, Filter) {
        super(cameraMode, Filter);
        this.cameraMode = cameraMode;
        this.Filter = Filter;
    }
    theSopia() {
        console.log("The Sopia");
    }
}
let kartik = new Instagram("test", "Test");
