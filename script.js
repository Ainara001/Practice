

function square(n) { return n*n; }
function isDivisibleBy3(n) { return n%3===0; }
function remainder(a,b){ return a%b; }
function celsiusToFahrenheit(c){ return c*9/5+32; }
function maxOfThree(a,b,c){ return Math.max(a,b,c); }
function toUpper(str){ return str.toUpperCase(); }
function removeSpaces(str){ return str.replace(/\s/g,''); }
function replaceA(str){ return str.replace(/a/g,'o'); }

function stringLength(str){
  let count=0;
  for(let c of str){ count++; }
  return count;
}

function contains(str,sub){ return str.includes(sub); }

function sumEven(arr){
  let s=0;
  for(let n of arr){ if(n%2===0)s+=n; }
  return s;
}

function countGreater(arr,x){
  let c=0;
  for(let n of arr){ if(n>x)c++; }
  return c;
}

function removeFirst(arr){ arr.shift(); return arr; }
function addToStart(arr,el){ arr.unshift(el); return arr; }
function maxArray(arr){ return Math.max(...arr); }
function minArray(arr){ return Math.min(...arr); }

function reverseArray(arr){
  let r=[];
  for(let i=arr.length-1;i>=0;i--){ r.push(arr[i]); }
  return r;
}

function sumEvenIndex(arr){
  let s=0;
  for(let i=0;i<arr.length;i+=2){ s+=arr[i]; }
  return s;
}

function copyArray(arr){ return [...arr]; }
function containsElement(arr,el){ return arr.includes(el); }

// объекты
let user={name:"Alex",age:20};
function getKeys(obj){ return Object.keys(obj); }
function getValues(obj){ return Object.values(obj); }
function addProperty(obj,k,v){ obj[k]=v; return obj; }
function removeProperty(obj,k){ delete obj[k]; return obj; }

function changeColor(){
  document.getElementById("text").style.color="red";
}

function hide(){
  document.getElementById("box").style.display="none";
}

function showValue(){
  alert(document.getElementById("input").value);
}

function addItem(){
  let value=document.getElementById("item").value;
  let li=document.createElement("li");
  li.textContent=value;
  document.getElementById("list").appendChild(li);

  document.getElementById("item").value="";
}