var assert = require('assert');

var deg = require('./deg.js');


function do_test (test_id, inp, dec, d, m, s) {
	var result = deg(inp),
		msg = '';

	test_id += 1;

	msg = 'Test ' + test_id + ' decimal needed ' + dec + ' but got ' + result.decimal;
	assert.strictEqual(result.decimal, dec, msg);

	msg = 'Test ' + test_id + ' degrees needed ' + d + ' but got ' + result.degrees;
	assert.strictEqual(result.degrees, d, msg);

	msg = 'Test ' + test_id + ' minutes needed ' + m + ' but got ' + result.minutes;
	assert.strictEqual(result.minutes, m, msg);

	msg = 'Test ' + test_id + ' seconds needed ' + s + ' but got ' + result.seconds;
	assert.strictEqual(result.seconds, s, msg);
}


var tests = [
	[1, 1.0, 1, 0, 0.0],
	[2.5, 2.5, 2, 30, 0.0],
	['2 30 6', 2.6, 2, 30, 6.0],
];

tests.forEach(function (parts, index) {
	parts.unshift(index);
	do_test.apply(this, parts);
});
