function combine(input1: number | string, input2: number | string) {
	let result;
	if (typeof input1 === 'number' && typeof input2 === 'number') {
		result = input1 + input2;
	}
	return result;
};

const combineAges = combine('Max', 'Anna');

// union type can help with either number or string 