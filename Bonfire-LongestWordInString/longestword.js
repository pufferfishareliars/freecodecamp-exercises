function findLongestWord(str) {
  words = str.split(/[^A-z]/);
  longestIndex = 0;
  for(var i = 0; i < words.length; i++){
    if(words[i].length > words[longestIndex].length){
     longestIndex = i; 
    }
  }
  return words[longestIndex].length;
}
