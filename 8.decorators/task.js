// Задача 1

function cachingDecoratorNew(func) {
	
	const cache = [{}];
	
	function wrapper(...args) {
		const hash = args.join(', ');
		let objectInCache = cache.findIndex((item) => item.hash === hash);
		
		if (objectInCache !== -1) {
			let obj = cache[objectInCache].result;
			console.log("Из кэша: " + obj);
			
			return "Из кэша: " + obj;
		}
		
		let result = func(...args);
		cache.push({hash, result});
		
		if (cache.length > 5) {
			cache.shift(); 
		}
	
		console.log("Вычисляем: " + result);
		
		return "Вычисляем: " + result;
	}
	
	return wrapper;

}


// Задача 2

function debounceDecoratorNew(func, ms) {
	let timerId;
	let flag = false;
	
	return function () {
		
		if(!flag) {
			flag = true;
			func.apply(this, arguments);
			return;
		}
		
		const funcCall = () => {
			func.apply(this, arguments);
		}
		
		clearTimeout(timerId);
		timerId = setTimeout(funcCall, ms);
	}
	
}


// Задача 3

let count = 0;

function debounceDecorator2(debounceDecoratorNew) {

  function wrapper() {
    count++;
    console.log("Вызов функции: " + count);
  }

  return wrapper();
} 

debounceDecorator2();
debounceDecorator2();
debounceDecorator2();
debounceDecorator2();
debounceDecorator2(); 