function getbubblesortAnimation(array)
{
const animations=[];
for(let i=0;i<array.length;i++)
{
 for(let j=0;j<array.length-i-1;j++)
 {
   animations.push([j,j+1]);//color change
   animations.push([j,j+1]);//color change
   if(array[j]>array[j+1])
   {
    let temp=array[j];
    array[j]=array[j+1];
    array[j+1]=temp;
   }
   const arr=[];
   arr.push(j,array[j]);//value change
   arr.push(j+1,array[j+1]);//value change
   animations.push(arr);
  }
}
animations.push([0,0]);
animations.push([0,0]);
const arr=[];
arr.push(0,array[0]);
arr.push(0,array[0]);
animations.push(arr);
return animations;
}
export default getbubblesortAnimation;