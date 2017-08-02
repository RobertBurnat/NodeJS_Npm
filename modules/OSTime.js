function OsTime (time) {
	if (time < 0) {
		return console.log('Wrong time: ' + time);
	}else if (time < 60) {
		let seconds = Math.floor((time%3600)%60);
		return (seconds + 'sec');
	}else if (time < 3600) {
		let minutes = Math.floor((time%3600)/60);
		let seconds = Math.floor((time%3600)%60);
		return (minutes + ' min ' + seconds + ' sec ');
	}else {
		let hours = Math.floor(time/3600);
		let minutes = Math.floor((time%3600)/60);
		let seconds = Math.floor((time%3600)%60);
		return(hours + ' godz. ' + minutes + ' min ' + seconds + ' sec ');
	}
}
exports.print = OsTime;