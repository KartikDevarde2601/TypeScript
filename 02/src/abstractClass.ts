 abstract class takePhoto {   // abstract class can not be instantiated directly    
    constructor(
        public cameraMode:string,
        public Filter :string
    ){
    }

     abstract theSopia(): void
}

// let kartik = new takePhoto("test", "Test") // error : Cannot create an instance of an abstract class.

class Instagram extends takePhoto {
    constructor(
      public cameraMode: string,
      public Filter: string
    ) {
      super(cameraMode, Filter);
    }
  
    theSopia(): void {
      console.log("The Sopia");
    }
  }


let kartik = new Instagram("test", "Test")
