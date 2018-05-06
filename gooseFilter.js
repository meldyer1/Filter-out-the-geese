function gooseFilter (birds) 
{
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var ans = birds;
 if (birds.length == 0)
  {
    return '[]';
  }
  // return an array containing all of the strings in the input array except those that match strings in geese
  for (let i = 0; i < geese.length; i++){
    for (let j = 0; j < birds.length; j++)
    {
      if( birds[j] === geese[i] ){
        ans.splice(j, 1);
      }
   }
   }
  return ans
}
