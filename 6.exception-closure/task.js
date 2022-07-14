
// Задача 1

function parseCount(number) {
  const setNumber = Number.parseInt(number);

  if (isNaN(setNumber)) {
    throw new Error("Невалидное значение");
  } 

  return setNumber;
}

function validateCount(number) {
	
	try {
		return parseCount(number);
	} 	catch (error) {
		return error;
	}	
}


// Задача 2

class Triangle {
	
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		
		if(a + b < c || b + c < a || a + c < b) {
			throw new Error ("Треугольник с такими сторонами не существует");
		}
	}
	
	getPerimeter() {
		let Perimeter = this.a + this.b + this.c;
		return Number(Perimeter);
	}
	
	getArea() {
		let p = 0.5 * (this.a + this.b + this.c);
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +(S.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	
	try {
		let newTriangle = new Triangle(a, b, c);
		return newTriangle;
	} catch {
		return {
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			},
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
		}
	}
}