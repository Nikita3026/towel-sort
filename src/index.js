
// You should implement your task here.
/* function sortNumeric(a,b)
{
  if(a>b) return 1;
  if(a==b) return 0;
  if(a<b) return -1;
}
 */
module.exports = function towelSort (matrix) {
/*   let string=""; */
  let array=[];
  let counter=0;
  if(matrix===undefined) return array;
  for(let i=0;i<matrix.length;i++)
  {
    for(let j=0;j<matrix[i].length;j++)
    {
      if(i%2==0)
      {
         array[counter]=matrix[i][j];
         counter++;
      }
      else{
        array[counter]=matrix[i][(matrix[i].length-1)-j];
        counter++;
      }
    }
  }
  return array;
}