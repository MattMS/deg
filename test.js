var assert = require('assert');

var deg = require('./deg.js');


function do_test (inp, dec, d, m, s) {
	var result = deg(inp),
		msg = '';
	assert.strictEqual(result.decimal, dec, 'Decimal failed');
	assert.strictEqual(result.degrees, d, 'Degrees failed');
	assert.strictEqual(result.minutes, m, 'Minutes failed');

	msg = 'Seconds needed ' + s + ' but got ' + result.seconds;
	assert.strictEqual(result.seconds, s, msg);
}


var tests = [
	[12, 12.0, 12, 0, 0.0],
	['12 30 6', 12.6, 12, 30, 6],
];

tests.forEach(function (parts, index) {
	do_test.apply(this, parts);
});
