type point ={
    x:number,
    y:number
}

function printPoints(pt:point){
    console.log('x value'+pt.x)
    console.log('y value'+pt.y)
}

printPoints({x:100,y:200})