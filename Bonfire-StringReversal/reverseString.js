function reverseString(str) {
  var reversed = str.split();
  j = 0;
  for(var i = str.length - 1; i >= 0; i--){
    reversed[j++] = str.charAt(i);
  }
  return reversed.join("");
}
