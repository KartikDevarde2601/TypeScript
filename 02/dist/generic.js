"use strict";
function identifierone(val) {
    return val;
}
function identifieTwo(val) {
    return val;
}
function identifierthree(val) {
    return val;
}
identifierthree("kartik");
function identifierFour(val) {
    return val;
}
function identifiefive(company) {
    return {
        name: company.name,
        valuation: company.valuation
    };
}
let apple = identifiefive({
    name: "apple",
    valuation: 2
});
console.log(apple.name);
function SearchResuit(product) {
    // database operation
    const myindex = 3;
    return product[myindex];
}
// arrow function syntax
const SearchMore = (product) => {
    // database operation
    const myindex = 3;
    return product[myindex];
};
