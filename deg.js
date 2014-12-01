var match_dms = /(\d+\.?\d*)\D+(\d+\.?\d*)\D+(\d+\.?\d*)/,
	match_dm = /(\d+\.?\d*)\D+(\d+\.?\d*)/,
	match_d = /(\d+\.?\d*)/,
	match_n = /(\d+)\.?(\d*)/;


module.exports = function deg (input) {
	var dec = 0.0, d = 0.0, m = 0.0, s = 0.0;

	var match = match_dms.exec(input);

	if (match) {
		s = parseFloat(match[3]);

	} else {
		match = match_dm.exec(input);
	}

	if (match) {
		match2 = match_n.exec(match[2]);

		if (match2) {
			m = parseInt(match2[1]);

			if (match2[2] != "") {
				s += parseInt(match2[2]) * 60;
			}
		}

	} else {
		match = match_d.exec(input);
	}

	if (match) {
		match2 = match_n.exec(match[1]);

		if (match2) {
			d = parseInt(match2[1]);

			if (match2[2] != "") {
				m += parseInt(match2[2]) * 60;
			}
		}
	}

	dec = d + (m / 60.0) + (s / 60.0);

	return {
		decimal: dec,
		degrees: d,
		minutes: m,
		seconds: s,
	};
};
