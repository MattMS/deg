# Deg

Convert between decimal degrees and degrees minutes seconds.


## Input checks

Each of these regular expressions check if the input string contains 3, 2 or 1 number.
The delimiter between the numbers can be any character.

	dms_check = /(\d+\.?\d*)\D+(\d+\.?\d*)\D+(\d+\.?\d*)/

	dm_check = /(\d+\.?\d*)\D+(\d+\.?\d*)/

	d_check = /(\d+\.?\d*)/

	float_check = /(\d+)(\.\d+)/


## Get decimal degrees

Build a float representing decimal degrees based on degrees, minutes, and seconds.

	get_decimal_degrees = (degrees, minutes, seconds)->
		decimal = degrees
		decimal += minutes / 60.0
		decimal += seconds / 3600.0
		decimal


## Convert number input

Input is a number, so it is treated as a decimal degrees float.

	convert_number_input = (input)->
		degrees = Math.floor input

		degrees_remainder = input - degrees

		m_float = degrees_remainder * 60.0

		minutes = Math.floor m_float

		minutes_remainder = m_float - minutes

		decimal: input
		degrees: degrees
		minutes: minutes
		seconds: minutes_remainder * 60.0


## Convert non-number input

If the input is not a number, then it is expected to be a string.

	convert_text = (input)->
		decimal = 0.0
		degrees = 0.0
		minutes = 0.0
		seconds = 0.0


### 3 numbers (degrees, minutes, seconds) check

Attempt to find 3 numbers.

		match = dms_check.exec input

A match means that 3 numbers were found.

		if match
			seconds = parseFloat match[3]

If 3 numbers were not found, then attempt to find 2 numbers.

		else
			match = dm_check.exec input


### 2 numbers (degrees, minutes) check

A match means that at least 2 numbers were found.

		if match

Check if minutes have a fraction.

			float_match = float_check.exec match[2]

			if float_match

Get the integer part of the minutes.

				minutes = parseInt float_match[1]

				minutes_remainder = parseInt float_match[2]

Add the fraction part to the seconds.

				seconds += minutes_remainder * 60

If minutes do not have a fraction, then it is an integer.

			else
				minutes = parseInt match[2]

If 2 numbers were not found, then attempt to find 1 number.

		else
			match = d_check.exec input


### 1 number (degrees) check

A match means that at least 1 number was found.

		if match

Check if degrees have a fraction.

			float_match = float_check.exec match[1]

			if float_match

Get the integer part of the degrees.

				degrees = parseInt float_match[1]

				degrees_remainder = parseFloat float_match[2]

Add the fraction part to the minutes.

				minutes += degrees_remainder * 60

If degrees do not have a fraction, then it is an integer.

			else
				degrees = parseInt match[1]


### Return object for conversion function

		decimal: get_decimal_degrees degrees, minutes, seconds
		degrees: degrees
		minutes: minutes
		seconds: seconds



## Conversion function

This function accepts either a string or a number as input.

	deg = (input)->
		if isNaN input
			convert_text input

		else
			convert_number_input input


## Expose the conversion function

	if module?
		module.exports = deg

	else if window?
		window.deg = deg
