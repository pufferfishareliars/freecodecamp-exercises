function factorialize(num) {
  var factorial = 1;
  while(num > 0){
    factorial *= num;
    num--;
  }
  return factorial;
}
