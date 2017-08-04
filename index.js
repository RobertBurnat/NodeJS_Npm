let OSinfo = require('./modules/OSInfo');
let EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter();
emitter.on('beforeCommand', (instruction) => console.log('You wrote: ' + instruction.green + ' trying to run command.'));

emitter.on('afterCommand', () => console.log('Finished Command'));

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
	let input = process.stdin.read();
	if(input !== null) {
		process.stdout.write(input);
		let instruction = input.toString().trim();
		// odpalanie zdarzenia beforeCommand (z parametrem)
		emitter.emit('beforeCommand', instruction);
		switch(instruction) {
			case '/exit' :
				process.stdout.write('Quitting app\n');
				process.exit();
			break;
			case '/version' :
				console.log(process.versions);
			break;
			case '/info' :
				console.log(process.env);
			break;
			case '/getOSinfo' :
				OSinfo.print();
			break;
			default :
				process.stderr.write('Wrong instruction\n');
		};
		emitter.emit('afterCommand');
	}
});