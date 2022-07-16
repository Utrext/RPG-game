
class AlarmClock {
	
	constructor(alarmCollection, timerId) {
		this.alarmCollection = [];
		this.timerId = null;
	}
	
	addClock(time, callBack, id) {
		
		if (id === undefined) {
			throw new Error("Введите id");
		} else if (this.alarmCollection.find(idSearch => idSearch.id === id)) {
			return "Такой id уже существует";
		}
		
		this.alarmCollection.push({time, callBack, id});
	}
	
	removeClock(id) {
		this.alarmCollection = this.alarmCollection.filter(idCheck => idCheck.id !== id);
		return `Удалён ${this.alarmCollection.splice(this.id)}`;
	}
	
	getCurrentFormattedTime() {
		const currentDate = new Date();
		const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
		const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
		
		return `${hours}:${minutes}`;
	}
	
	start() {
		
		function checkClock(clock) {
			if (clock.time === this.getCurrentFormattedTime()) {
			return clock.callBack;
			}
		}
		
		if (this.timerId === null) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(clock => checkClock(clock));
			}, 500);
		}
	}
	
	stop() {
		
		if(this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
		
	}
	
	printAlarms() {
		return this.alarmCollection.forEach(clock => console.log(`Будильник ${clock.id} установлен на ${clock.time}`));
	}
	
	clearAlarms() {
		clearInterval(this.timerId);
		return this.alarmCollection = [];
	}
}


// Пример

function testCase() {
	
	let alarm = new AlarmClock();
	
	  alarm.addClock("08:00", () => console.log("Пора вставать!"), 1);
	  alarm.addClock("08:01", () => {console.log("Давай, вставай уже!"); alarm.removeClock(2)}, 2);
	  alarm.addClock("08:03", () => {console.log("Иди умываться!"); alarm.removeClock(3)}, 3);
	  // alarm.addClock("08:05", () => console.log("Ты проспал"));
	  
	  alarm.printAlarms();
	  alarm.start();
	  alarm.stop();
}

testCase();