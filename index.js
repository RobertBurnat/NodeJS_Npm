let OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
	let input = process.stdin.read();
	if(input !== null) {
		process.stdout.write(input);
		let instruction = input.toString().trim();
		switch(instruction) {
			case '/exit' :
				console.log('Quitting app\n');
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
		}
	}
});