let container = document.querySelector('.container');
document.query
let firstInt = document.querySelector('.first');
let secondInt = document.querySelector('.second');
function taskOne(){
   greaterThan(firstInt.value, secondInt.value);
   
}
function taskTwo(){
   iterateData();
}
let greaterThan = (a,b)=>{
   let result;
   let compareData= a>b;
   if(compareData){
      result=a;
   }else{
      result= b
   }
   container.innerHTML=`${result} is greater`;
   firstInt.value ="";
   secondInt.value="";
   return result;
}
let iterateData = ()=>{
   let html=" ";
   for(let i=0;i<=20;i++){
      if(i%2==0){
         html += ` <div style="color:blue;">${i}  is even  </div>`;
      }else{
         html += ` <div>${i}  is odd</div>`;
      }
      container.innerHTML = html;
   }
}

function taskThree(){
   anotherLoop()
}
let anotherLoop = ()=>{
   let html="";
   for(let i=0;i<=100;i++){
      if(i%3==0 && i%5==0){
         html+=`<div style="color:magenta">${i} FizzBuzz</div>`
      }
      else if(i%3==0){
         html+=`<div style="color:blue"> ${i} Fizz</div>`;

      }else if(i%5==0){
         html+=`<div> ${i} Buzz</div>`;
;
      }
   }
   container.innerHTML=html;
}


