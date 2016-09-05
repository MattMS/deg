# Test deg

## Library imports

	tape = require 'tape'


## Relative imports

	deg = require './deg'


## Run tests

### Positive integer

	tape 'Positive integer', (t)->
		t.plan 4

		result = deg(1)

		t.equal(result.decimal, 1.0, 'Decimal degrees')

		t.equal(result.degrees, 1, 'Degrees')

		t.equal(result.minutes, 0, 'Minutes')

		t.equal(result.seconds, 0, 'Seconds')


### Positive simple float

	tape 'Positive float with conversion including minutes integer', (t)->
		t.plan 4

		result = deg(2.5)

		t.equal(result.decimal, 2.5, 'Decimal degrees')

		t.equal(result.degrees, 2, 'Degrees')

		t.equal(result.minutes, 30, 'Minutes')

		t.equal(result.seconds, 0, 'Seconds')


### Positive string

	tape 'Positive string with integers for degrees and minutes', (t)->
		t.plan 4

		result = deg('2 30 0')

		t.equal(result.decimal, 2.5, 'Decimal degrees')

		t.equal(result.degrees, 2, 'Degrees')

		t.equal(result.minutes, 30, 'Minutes')

		t.equal(result.seconds, 0, 'Seconds')


### Positive float

	tape 'Positive float with conversion including seconds float', (t)->
		t.plan 4

		result = deg(12.65)

		t.equal(result.decimal, 12.65, 'Decimal degrees')

		t.equal(result.degrees, 12, 'Degrees')

		t.equal(result.minutes, 39, 'Minutes')

		t.equal(result.seconds, 1.2789769243681803e-12, 'Seconds')


### Positive string

	tape 'Positive string with integers for degrees, minutes, and seconds', (t)->
		t.plan 4

		result = deg('12 34 5')

		t.equal(result.decimal, 12.568055555555555, 'Decimal degrees')

		t.equal(result.degrees, 12, 'Degrees')

		t.equal(result.minutes, 34, 'Minutes')

		t.equal(result.seconds, 5, 'Seconds')
