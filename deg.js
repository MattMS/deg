var match_dms = /(\d+\.?\d*)\D+(\d+\.?\d*)\D+(\d+\.?\d*)/,
	match_dm = /(\d+\.?\d*)\D+(\d+\.?\d*)/,
	match_d = /(\d+\.?\d*)/,
	match_n = /(\d+)(\.\d+)/;


module.exports = function deg (input) {
	var dec = 0.0, d = 0.0, m = 0.0, s = 0.0;

	// Attempt to find 3 numbers.
	var match = match_dms.exec(input);

	// Found 3 numbers.
	if (match) {
		// Get the seconds.
		s = parseFloat(match[3]);

	} else {
		// Attempt to find 2 numbers.
		match = match_dm.exec(input);
	}

	// At least 2 numbers were found.
	if (match) {
		// Check if minutes have a fraction.
		match2 = match_n.exec(match[2]);

		if (match2) {
			// Get the integer part of the minutes.
			m = parseInt(match2[1]);

			// Add the fraction part to the seconds.
			s += parseFloat(match2[2]) * 60;

		} else {
			// Get the minutes.
			m = parseInt(match[2]);
		}

	} else {
		// Attempt to find 1 number.
		match = match_d.exec(input);
	}

	// At least 1 number was found.
	if (match) {
		// Check if degrees have a fraction.
		match2 = match_n.exec(match[1]);

		if (match2) {
			// Get the integer part of the degrees.
			d = parseInt(match2[1]);

			// Add the fraction part to the minutes.
			m += parseFloat(match2[2]) * 60;

		} else {
			// Get the degrees.
			m = parseInt(match[2]);
		}
	}

	// Calculate the decimal degrees from what was found.
	dec = d + (m / 60.0) + (s / 60.0);

	return {
		decimal: dec,
		degrees: d,
		minutes: m,
		seconds: s,
	};
};
