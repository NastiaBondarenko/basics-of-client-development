'use strict';

const firstFunction = num => {
	const arr = [];
	for(let i = 0; i < num; i++){
		arr[i] = i;
	}
	return arr;
};

const secondFunction = (num1, num2, num3) =>{
	if(num1%num2 == 0 && num1%num3 == 0) return true;
	else return false;
}

const thirdsFunction = (str) =>{
	let newStr = str[0].toUpperCase() + str.slice(1);
	return newStr;
}

