function palindrome(str) {
  asArray = str.split();
  // midpoint different if even or odd
  length = str.length;
  if(length % 2 == 1)
    midpoint = (length-1) / 2;
  else
    midpoint = length / 2 - 1;
  
  console.log("Midpoint s[" + midpoint + "] : " + str.charAt(midpoint));
  palindrome = true;
  /**while(palindrome && index ){
    if(asArray[i] != asArray[])
      palindrome = False;
    
  }
  return palindrome;*/
  return;
}

palindrome("helpo");
