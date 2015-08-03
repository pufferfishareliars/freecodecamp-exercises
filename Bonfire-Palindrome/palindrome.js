function arrayMidpoint(length){
  if(length % 2 == 1)
    midpoint = (length-1) / 2;
  else
    midpoint = length / 2 - 1; 
  return midpoint;
}

function palindrome(str) {
  str = str.replace(/[^A-z]/g, ""); // get rid of non alphabetic characters
  str = str.toLowerCase();
  asArray = str.split("");
  console.log("String: " + str);
  // midpoint different if even or odd
  midpoint = arrayMidpoint(str.length);

  console.log("Midpoint s[" + midpoint + "] : " + str.charAt(midpoint));
  ispalindrome = true;
  var sindex = 0, eindex=str.length-1;
  while(palindrome && sindex <= midpoint ){
    console.log("comparing " + asArray[sindex] + " and " + asArray[eindex]);
    if(asArray[sindex] != asArray[eindex])
      ispalindrome = false;
    sindex++;
    eindex--;

  }
  return ispalindrome;
}
