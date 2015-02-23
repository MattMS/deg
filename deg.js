// Generated by CoffeeScript 1.9.1
(function() {
  var d_check, deg, dm_check, dms_check, float_check;

  dms_check = /(\d+\.?\d*)\D+(\d+\.?\d*)\D+(\d+\.?\d*)/;

  dm_check = /(\d+\.?\d*)\D+(\d+\.?\d*)/;

  d_check = /(\d+\.?\d*)/;

  float_check = /(\d+)(\.\d+)/;

  deg = function(input) {
    var decimal, degrees, degrees_remainder, float_match, m_float, match, minutes, minutes_remainder, seconds;
    decimal = 0.0;
    degrees = 0.0;
    minutes = 0.0;
    seconds = 0.0;
    if (isNaN(input)) {
      match = dms_check.exec(input);
      if (match) {
        seconds = parseFloat(match[3]);
      } else {
        match = dm_check.exec(input);
      }
      if (match) {
        float_match = float_check.exec(match[2]);
        if (float_match) {
          minutes = parseInt(float_match[1]);
          minutes_remainder = parseInt(float_match[2]);
          seconds += minutes_remainder * 60;
        } else {
          minutes = parseInt(match[2]);
        }
      } else {
        match = d_check.exec(input);
      }
      if (match) {
        float_match = float_check.exec(match[1]);
        if (float_match) {
          degrees = parseInt(float_match[1]);
          degrees_remainder = parseFloat(float_match[2]);
          minutes += degrees_remainder * 60;
        } else {
          degrees = parseInt(match[1]);
        }
      }
      decimal = degrees;
      decimal += minutes / 60.0;
      decimal += seconds / 3600.0;
    } else {
      decimal = input;
      degrees = Math.floor(input);
      degrees_remainder = input - degrees;
      m_float = degrees_remainder * 60.0;
      minutes = Math.floor(m_float);
      minutes_remainder = m_float - minutes;
      seconds = minutes_remainder * 60.0;
    }
    return {
      decimal: decimal,
      degrees: degrees,
      minutes: minutes,
      seconds: seconds
    };
  };

  if (module) {
    module.exports = deg;
  } else if (window) {
    window.deg = deg;
  }

}).call(this);
