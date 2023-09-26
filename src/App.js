import './App.css';
import React,{useEffect, useState} from "react"
import getbubblesortAnimation from './Components/Bubblesort';
import getSelectionSortAnimation from './Components/SelectionSort';
import getquicksortanimation from './Components/Quicksort';
import getMergeSortAnimation from './Components/MergeSort';
let ANIMATION_SPEED_MS =100;
let PRIMARY_COLOR = 'pink';
const SECONDARY_COLOR = '#bafc03';
function App() {
  const[array,setArray]=useState([]);
  const[windowsize,getwindowsize]=useState(window.innerWidth);
  const[count,setCount]=useState(45);
  const [a,setA]=useState(4);
  const[c,setC]=useState(0);
  return (
    <div className="App">
      <div>
      <header className="App-header">
        <div><center><h1>Sorting Visualizer</h1>
        <h2>Visualize the sorting algorithms here!!!</h2></center></div>
        <div className='enter'>
        <p>Enter the number of elements</p>
        <input type='number' id='elements' className='inputs'></input>
        </div>
        <p>Select the type of sort :  </p>
        <select id ="Sorttype">
          <option value="bubblesort">Bubble Sort</option>
          <option value="selectionsort">Selection Sort</option>
          <option value="mergesort">Merge Sort</option>
          <option value="quicksort">Quick Sort</option>
        </select>
        <div className='speed'>
        <p>Speed : </p><input onChange={handleChange} className='ranger' type='range'></input></div>
        <br></br>
        <button onClick={randomelements} id='GenerateArray'>Generate Array</button>
        <label htmlFor="sort" id="sort">
        </label>
        <button onClick={sorting}id='SortButton'>Sort!</button>
        <button onClick={reset}>Reset</button>
        <div className='array-container'>
          {
          array.map(
            (value,idx)=>(
            <div className='array-bar' key={idx} style={{
              backgroundColor: "pink",
              height: `${value*a}px`,width:`${count}px`}}>{value}</div>
          )
          )
          }
          </div>
      </header>
      </div>
    </div>
  );
function handleChange(event)
{
  ANIMATION_SPEED_MS=170-Math.floor((parseInt(event.target.value)+3) * 1.65);

}
function reset()
{
  window.location.reload();
}
function randomelements()
{
  console.log(windowsize)
  if(windowsize<600)
  {
    setCount(20);
  }
let x=document.getElementById("elements").value;
if(x==="")
{
  alert("Please enter a value");
  return;
}
else if(x>50)
{
  alert("Please enter a value less than 100");
  document.getElementById("elements").value="";
  return;
}
else if(x<0)
{
  alert("Please enter a positive number");
  document.getElementById("elements").value="";
  return;
}
if(x>12 && x<20)
{
  if(windowsize<600)
  setCount(10);
  else
  setCount(35);
}
if(x>20)
{
   if(windowsize<600)
   setCount(7);
   else
   setCount(25);
}
setC(x-1);
const arr=[];
for(let i=0;i<x;i++)
{
  arr.push(Math.floor(Math.random()*(100-5+1)+5));
}
setArray(arr);
}
function disablebtn()
{
  document.getElementById("GenerateArray").disabled=true;
  document.getElementById("SortButton").disabled=true;
}
function sorting()
{
  disablebtn();
  let animations=[];
  let e=document.getElementById("Sorttype");
  var valuee=e.value;
if(valuee=="quicksort")
{
animations=getquicksortanimation(array);
quicksort(animations);
}
else if(valuee=="bubblesort")
{
  animations=getbubblesortAnimation(array);
  bubblesort(animations);
}
else if(valuee=="mergesort")
{
  animations=getMergeSortAnimation(array);
  MergeSort(animations);
}
else
{
animations=getSelectionSortAnimation(array);
selectionsort(animations);
}
}
function bubblesort(animations)
{
  let b=(3*c)-1;
  let cnt=c;
  for(let i=0;i<animations.length;i++)
  {
    const arrayBars=document.getElementsByClassName('array-bar');
    const iscolorchange=i%3!==2;
    if(iscolorchange)
    {
    const[barOneidx,barTwoidx]=animations[i];
    const barOnestyle=arrayBars[barOneidx].style;
    const barTwostyle=arrayBars[barTwoidx].style;
    const color=i%3===0?SECONDARY_COLOR:PRIMARY_COLOR;
      setTimeout(()=>
      {
        barOnestyle.backgroundColor=color;
        barTwostyle.backgroundColor=color;
      },i*ANIMATION_SPEED_MS);
    }
    else
    {
      
      setTimeout(()=>{
        const [barOneidx,newHeight,barTwoidx,newH]=animations[i];
      const barOnestyle=arrayBars[barOneidx].style;
      const barTwostyle=arrayBars[barTwoidx].style;
        arrayBars[barOneidx].innerText=newHeight;
        barOnestyle.height=`${newHeight*a}px`;
        arrayBars[barTwoidx].innerText=newH;
        barTwostyle.height=`${newH*a}px`;
      if(i==b)
      {
      barTwostyle.backgroundColor='#e31084';
      b+=3*(cnt-1);
      cnt--;
      if(cnt==0)
      {
        b+=3;
      }
      }
    },i*ANIMATION_SPEED_MS);
    }
  }
}
function selectionsort(animations)
{
  {
    let b=(3*c)-1;
    let cnt=c;
    for(let i=0;i<animations.length;i++)
    {
      const arrayBars=document.getElementsByClassName('array-bar');
      const iscolorchange=i%3!==2;
      if(iscolorchange)
      {
      const[barOneidx,barTwoidx]=animations[i];
      const barOnestyle=arrayBars[barOneidx].style;
      const barTwostyle=arrayBars[barTwoidx].style;
      const color=i%3===0?SECONDARY_COLOR:PRIMARY_COLOR;
        setTimeout(()=>
        {
          barOnestyle.backgroundColor=color;
          barTwostyle.backgroundColor=color;
        },i*ANIMATION_SPEED_MS);
      }
      else
      {
        
        setTimeout(()=>{
          const [barOneidx,newHeight,barTwoidx,newH]=animations[i];
        const barOnestyle=arrayBars[barOneidx].style;
        const barTwostyle=arrayBars[barTwoidx].style;
          arrayBars[barOneidx].innerText=newHeight;
          barOnestyle.height=`${newHeight*a}px`;
          arrayBars[barTwoidx].innerText=newH;
          barTwostyle.height=`${newH*a}px`;
        if(i==b)
        {
        barOnestyle.backgroundColor='#e31084';
        b+=3*(cnt-1);
        cnt--;
        if(cnt==0)
        {
          b+=3;
        }
        }
      },i*ANIMATION_SPEED_MS);
      }
    }
  }
}
function quicksort(animations)
{
  PRIMARY_COLOR='#e31084'
for(let i=0;i<animations.length;i++)
{
  const arrayBars=document.getElementsByClassName('array-bar');
  const iscolorchange=i%3!==2;
  
  if(iscolorchange)
  {
    const[barOneidx,barTwoidx]=animations[i];
  const barOnestyle=arrayBars[barOneidx].style;
  const barTwostyle=arrayBars[barTwoidx].style;
    const color=i%3===0?SECONDARY_COLOR:PRIMARY_COLOR;
    setTimeout(()=>
    {
      barOnestyle.backgroundColor=color;
      barTwostyle.backgroundColor=color;
    },i*ANIMATION_SPEED_MS);
  }
  else
  {
    setTimeout(()=>{
      const [barOneidx,newHeight,barTwoidx,newH]=animations[i];
      const barOnestyle=arrayBars[barOneidx].style;
      arrayBars[barOneidx].innerText=newHeight;
      barOnestyle.height=`${newHeight*a}px`;
      const barTwostyle=arrayBars[barTwoidx].style;
      arrayBars[barTwoidx].innerText=newH;
      barTwostyle.height=`${newH*a}px`;
  },i*ANIMATION_SPEED_MS);
  }
}
}
function MergeSort(animations)
{
  PRIMARY_COLOR='#e31084';
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight*a}px`;
        arrayBars[barOneIdx].innerText=newHeight;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}

}
export default App;