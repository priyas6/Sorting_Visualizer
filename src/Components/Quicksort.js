function getquicksortanimation(array)
{
    const animations=[];
    quicksort(array,0,array.length-1,animations);
    console.log(animations);
    return animations;
}
function quicksort(array,low,high,animations)
{
    if(low<high)
    {
        let p=partition(array,low,high,animations);
        quicksort(array,low,p-1,animations);
        quicksort(array,p+1,high,animations);
    }
}
function partition(array,low,high,animations)
{
    let pivot=array[high];
    let i=low-1;
    for(let j=low;j<=high-1;j++)
    {
        animations.push([j,high]);
        animations.push([j,high]);
        if(array[j]<pivot)
        {
            i++;
            swap(array,i,j,animations);
        }
        else
        {
          swap(array,j,j,animations);
        }

    }
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    swap(array,i+1,high,animations);
    return i+1;
}
function swap(array,i,j,animations)
{
    let temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    let arr=[];
    arr.push(i,array[i]);
    arr.push(j,array[j]);
    animations.push(arr);
}
export default getquicksortanimation;