var assert = require('assert');

var deg = require('./deg.js');


function do_test (inp, dec, d, m, s) {
	var result = deg(inp),
		msg = '';

	msg = 'Decimal needed ' + dec + ' but got ' + result.decimal;
	assert.strictEqual(result.decimal, dec, msg);

	msg = 'Degrees needed ' + d + ' but got ' + result.degrees;
	assert.strictEqual(result.degrees, d, msg);

	msg = 'Minutes needed ' + m + ' but got ' + result.minutes;
	assert.strictEqual(result.minutes, m, msg);

	msg = 'Seconds needed ' + s + ' but got ' + result.seconds;
	assert.strictEqual(result.seconds, s, msg);
}


var tests = [
	[1, 2.0, 2, 0, 0.0],
	['2 30 6', 2.6, 2, 30, 6.0],
];

tests.forEach(function (parts, index) {
	do_test.apply(this, parts);
});
