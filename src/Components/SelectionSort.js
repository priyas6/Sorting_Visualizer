function getSelectionSortAnimation(array)
{
const animations=[];
for(let i=0;i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++)
    {
        animations.push([i,j]);
        animations.push([i,j]);
        if(array[i]>array[j])
        {
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;

        }
    const arr=[];
   arr.push(i,array[i]);//value change
   arr.push(j,array[j]);//value change
   animations.push(arr);

    }
}
animations.push([array.length-1,array.length-1]);
animations.push([array.length-1,array.length-1]);
const arr=[];
arr.push(array.length-1,array[array.length-1]);
arr.push(array.length-1,array[array.length-1]);
animations.push(arr);


return animations;

}
export default getSelectionSortAnimation;