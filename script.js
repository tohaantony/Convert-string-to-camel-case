function toCamelCase(str) {
  var words = str.split(/[-_]/);
  var camelCase = words[0];

  for (var i = 1; i < words.length; i++) {
    camelCase += words[i][0].toUpperCase() + words[i].slice(1);
  }

  return camelCase;
}
