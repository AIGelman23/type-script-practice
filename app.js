function add(n1, n2) {
    return n1 + n2;
}
// the :number at the end of the function describes
// the return type of the function's value
// this determines that the result and return type of 
// this function will be a number type
function printResult(num) {
    console.log('Result: ' + num);
    // we are not returning anything 
    // so the return type is void
    // javascript doesn't have a name for this
}
console.log(printResult(add(5, 12)));
