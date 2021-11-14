function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log('Result: ' + num);
	// you can have undefined as a type in typescript
}
 
printResult(add(5, 12));
