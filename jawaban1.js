function findFirstDuplicateChar(str) {
	let arr = str.split('');
	let charDuplicate = {};
	for (let char of arr){
		if(charDuplicate[char]){
			return char;
		};
		charDuplicate[char]= 1;
	};
};

console.log(findFirstDuplicateChar('ABCA'));		// A
console.log(findFirstDuplicateChar('ABCDEBE'));		// B		
console.log(findFirstDuplicateChar('ABBA'));		// B
