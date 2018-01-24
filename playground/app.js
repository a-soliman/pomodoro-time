
let seconds = 1;
let minutes	= 0;
let hours	= 0;

let shortBreak = 3;

let longBreak = {
	minutes: 10,
	seconds: 0
};

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

let startShortBreak = setInterval(function() { 
	
	myTimer();

	if( shortBreak === 0) {
		stopTimer(startShortBreak);

	}
}, 1000);

function myTimer() {
    console.log(shortBreak);
    shortBreak--
}


let stopTimer = ( timer ) => {
	clearInterval(timer);
}	



