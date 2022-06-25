function compareArrays(arr1, arr2) {
  let result = arr1.every((equal, index) => equal === arr2[index]) && arr1.length === arr2.length; 
  
  return result; // true если массивы идентичны
	 
};


function advancedFilter(arr) {
  let resultArr = arr.filter((num) => num > 0).filter((num) => num % 3 === 0).map((num) => num * 10);

  return resultArr;
  
};