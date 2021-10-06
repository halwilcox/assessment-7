const words = ['Haleigh', 'stayed', 'up', 'too', 'late']

const findLongestWord = (strArr) => {
  let longest = strArr[0]
  for(let i = 0; i < strArr.length; i++){
    if(strArr[i].length > longest.length){
      longest = strArr[i]
    }
  }

  return longest.length
}
console.log(findLongestWord(words))