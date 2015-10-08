function song() {
	what();
	chorusChorus();
	what();
	yeah();
	first();
	chorusChorus();
	second();
	chorusChorus();
	whatWhat();
	chorus();
	dontHurt();
	dontHurt();
}
function whatWhat () {
	what();
	what();
}

function what() {
	console.log('What is love?');
}

function chorus() {
	what();
	console.log('Baby, don\'t ' + hurtMe());
	console.log('Don\'t ' + hurtMe() + ' no more');
}
function chorusChorus() {
	chorus();
	chorus();
}

function dontHurt() {
	console.log('Don\'t ' + hurtMe())
}

function hurtMe() {
	return 'hurt me';
}

function yeah() {
	console.log ('Yeah, yeah')
}

function first(){
	console.log(dontKnow() + ' why you\'re not there \n' + 'I give you my love, but you don\'t care \n' + 'So what is right? \n' + 'And what is wrong? \n' + 'Gimme a sign');
}

function second() {
	console.log ('Oh ' + dontKnow() + ',What can I do? \n' + 'What else an I say, it\'s up to you \n' + 'I know we\'re one \n' + 'Just me and you \n' + 'I can\'t go on')
}

function dontKnow(){
	return 'I don\'t know';
}

song();