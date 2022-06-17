// Задание 1
function getArrayParams(arr) {

  let min = arr[0];
  let max = arr[0]; 
  let sum = 0; 
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
    
    sum += arr[i];

  }

  avg = +(sum / arr.length).toFixed(2);

  return {max: max, min: min, avg: avg};
}

// Задание 2
function worker(arr) {
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
	  sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
	
	sum = func(arrOfArr[i]);

    if (sum > max) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  
  let param = getArrayParams(arr);
  let diff = Math.abs(param.max - param.min);
 
  return diff;
}
