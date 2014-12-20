# Degrees conversions

Convert between decimal degrees and degrees minutes seconds.


## (Future) Usage

Please note: most of these examples do not currently work!

This is a work-in-progress (notice the version is 0.x.x).

Currently only the `deg` command line works.


### Command line

	npm install -g deg

Need to install globally to get the `deg` command-line tool.


### Node.js

Save to package.json for the current project:

	npm install --save deg

Then you can use the module in your code:

	var deg = require('deg');

	var v = deg(12.345);
	var d = v.degrees;  // 12
	var m = v.minutes;  // 20
	var s = v.seconds;  // 42.0

	var f = deg('12 20 42').decimal;  // 12.345


### Browser

	<script src="deg.min.js"></script>
	<script>
		var v = deg('1 2 3');
		alert(v.decimal);
	</script>
