function identifierone(val:number | string ): number | string{
    return val
}


function identifieTwo(val:any):any{
    return val
}

function identifierthree<type> (val:type):type{
    return val
}

identifierthree("kartik")

function identifierFour <T>(val:T):T {
    return val; 
}


interface Company {
    name:string
    valuation: number
}
interface Company {
    name: string;
    valuation: number;
  }
  
  function identifiefive<T extends Company>(company: T): Pick<T, 'name' | 'valuation'> {
    return {
      name: company.name,
      valuation: company.valuation
    };
  }

let apple = identifiefive({
    name:"apple",
    valuation:2
})

console.log(apple.name)



function SearchResuit<T> (product:T[]):T {
    // database operation
    const myindex = 3
    return product[myindex]
}

// arrow function syntax
const SearchMore = <T>(product:T[]):T => {
// database operation
const myindex = 3
return product[myindex]

}