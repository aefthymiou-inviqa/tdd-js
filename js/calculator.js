var Calculator = (function() {
  'use strict';

  var regex = new RegExp("\\s");

  function extractSeparator(string) {
    var matches = string.match(new RegExp("^//(\\D+)"));
    if(matches) {
      regex = new RegExp(matches[1]);
      return string.replace(new RegExp(matches[0]), '');
    }

    return string;
  }

  function add(string) {
    if (!string) {
      return 0;
    }

    string = extractSeparator(string);
    return parseInt(string.split(regex).reduce(
      function (previousValue, currentValue, index, array) {
        return parseInt(previousValue) + parseInt(currentValue);
     }
    ));
  }

  return {
    add: add
  };

}());
