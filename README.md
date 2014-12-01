# Degrees conversions

	npm install -g deg

Install globally to get the `deg` command-line tool.


## Usage

### Node.js

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
