function bubbleSort(arr){
	for (let i=arr.length; i>0; i--){
		for (let j=0; j<i-1; j++){
			if(arr[j] > arr[j+1]){
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
			};
		};
	};
	return arr;
};


console.log(bubbleSort([234,1,34,8,-1,45,0,87]));	// [ -1, 0, 1, 8, 34, 45, 87, 234 ]

