var dms_check = /(\d+\.?\d*)\D+(\d+\.?\d*)\D+(\d+\.?\d*)/,
	dm_check = /(\d+\.?\d*)\D+(\d+\.?\d*)/,
	d_check = /(\d+\.?\d*)/,
	float_check = /(\d+)(\.\d+)/;


module.exports = function deg (input) {
	var dec = 0.0, d = 0.0, m = 0.0, s = 0.0;

	if (isNaN(input)) {
		// Attempt to find 3 numbers.
		var match = dms_check.exec(input);

		// Found 3 numbers.
		if (match) {
			// Get the seconds.
			s = parseFloat(match[3]);

		} else {
			// Attempt to find 2 numbers.
			match = dm_check.exec(input);
		}

		// At least 2 numbers were found.
		if (match) {
			// Check if minutes have a fraction.
			float_match = float_check.exec(match[2]);

			if (float_match) {
				// Get the integer part of the minutes.
				m = parseInt(float_match[1]);

				// Add the fraction part to the seconds.
				s += parseFloat(float_match[2]) * 60;

			} else {
				// Get the minutes.
				m = parseInt(match[2]);
			}

		} else {
			// Attempt to find 1 number.
			match = d_check.exec(input);
		}

		// At least 1 number was found.
		if (match) {
			// Check if degrees have a fraction.
			float_match = float_check.exec(match[1]);

			if (float_match) {
				// Get the integer part of the degrees.
				d = parseInt(float_match[1]);

				// Add the fraction part to the minutes.
				m += parseFloat(float_match[2]) * 60;

			} else {
				// Get the degrees.
				d = parseInt(match[1]);
			}
		}

		// Calculate the decimal degrees from what was found.
		dec = d + (m / 60.0) + (s / 3600.0);

	// Input is a number, so it is treated as a decimal degrees float.
	} else {
		dec = input;

		d = Math.floor(input);

		m_float = (input - d) * 60.0;
		m = Math.floor(m_float);

		s = (m_float - m) * 60.0;
	}

	return {
		decimal: dec,
		degrees: d,
		minutes: m,
		seconds: s,
	};
};
