let os = require('os');
let OSTime = require('./OSTime');
let colors = require('colors');

function getOSinfo() {
	let type = os.type();
	let release = os.release();
	let cpu = os.cpus()[0].model;
	let uptime = os.uptime();
	let userInfo = os.userInfo();

	if(type === 'Darwin') {
		type = 'OSX';
	}else if (type === 'Windows_NT') {
		type = 'Windows';
	}

	console.log('System: '.gray, type);
	console.log('Release: '.red, release);
	console.log('CPU model: '.blue, cpu);
	console.log('Uptime: ~ '.green, (uptime / 60).toFixed(0), 'min');
	console.log('User name: '.yellow, userInfo.username);
	console.log('Home dir: '.white, userInfo.homedir);
	console.log('Time 1: '.red, OSTime.print(123020));
	console.log('Time 2: '.blue, OSTime.print(1));
	console.log('Time 3: '.green, OSTime.print(33));
	console.log('Time 4: '.yellow, OSTime.print(69));
}
exports.print = getOSinfo;