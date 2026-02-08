const variable = "value";
let variable2 = "value2";

if (variable === "value") {
	console.log("Hello, World!");
} else if (variable2 === "value2") {
	console.log("Hello, World!");
} else {
	console.log("Hello, World!");
}

let a = 10;
if (a > 10) {
	a = 20;
} else {
	a = 10;
}

// ternary operator
const result = a > 10 ? 20 : 10;

function myFunction(a, b) {
	console.log("Hello, World!");
}

const arrow = (a, b) => {
	console.log("Hello, World!");
};

class MyClass {
	constructor() {
		this.property = "value";
	}

	method() {
		console.log("Hello, World!");
		this.property = "new value";
	}
}

const myInstance = new MyClass();

// x = [i for i in range(1,20)]

const arr = [1, 2, 3, 4.3, 1, 1, 2];

// find, filter, map
const findOne = (one) => {
	return one === 1;
};
const firstOne = arr.find((elem) => {
	return elem === 1;
});

const arrowFirstOne = arr.find(findOne);

const OneFilter = arr.filter((elem) => {
	return elem === 1;
});

const OneMap = arr.map((elem) => {
	return elem * 2;
});

// console.log(firstOne);
console.log("find",arrowFirstOne);
console.log("filter",OneFilter);
console.log("map",OneMap);
console.log("orig", arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// 	// dbEntry(arr[i])
// }
