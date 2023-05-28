//A program to display names of people that like a post
function likes(names) {
  
  const numLikes = names.length;

   if (numLikes === 1){
    return `${names[0]} likes this`
  } else if (numLikes === 2){
    return `${names[0]} and ${names[1]} likes this`
  }  else if (numLikes > 2){
    const remainingNum = numLikes - 2
    return `${names[0]}, ${names[1]} and ${remainingNum} others likes this`
  } else {
    return "no one likes this";
  }

}
// code in usage
const names = {
  firstGroup: ['Senyo', 'Kojo', 'Happy', 'Dzidzor', 'Richard' ],
  secondGroup: ['Senyo', 'Kojo'],
  thirdGroup: ['Senyo'],
  fourGroup: []
}
// iterating names
for (let group in names) {
  const displayNames = likes(names[group]);
  console.log(displayNames)
}
