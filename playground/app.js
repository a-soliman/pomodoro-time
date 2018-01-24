
let seconds = 1;
let minutes	= 0;
let hours	= 0;

let shortBreak 	= 300;
let longBreak 	= 600;

/*
setInterval(()=> {
	
	if ( seconds === 60 ) { 
		minutes += 1;
		seconds = 0;
	}

	if ( minutes === 60 )	{
		hours 	+= 1;
		minutes	= 0;
	}

	console.log(minutes + ' : ' + seconds);
	
	seconds++;

}, 1000)
*/

// let startShortBreak = setInterval(() => { 
	
// 	myTimer();

// 	if( shortBreak === 0) {
// 		stopTimer(startShortBreak);

// 	}
// }, 1000);

let stopTimer = ( timer ) => {
	clearInterval(timer);
}	

function myTimer() {
    console.log(shortBreak);
    shortBreak--
}

let displayTime = ( time ) => {
	let hours = 0, min = 0, sec = 0;

	while( time > 0) {
		if ( time >= 3600 ) {
			hours++;
			time = time - 3600;
		}
		if (time >= 60) {
			min++;
			time = time - 60;
		}
		else {
			sec = time;
			time = 0;
		}
	}

	return `HOURS : ${hours}, MIN : ${min}, SEC : ${sec}`;
	
}

console.log(displayTime(125))






