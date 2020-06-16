let container = document.querySelector('.container');
document.query
let firstInt = document.querySelector('.first');
let secondInt = document.querySelector('.second');
const taskOne = ()=>{
   greaterThan(firstInt.value, secondInt.value);
   
}
const taskTwo =()=>{
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
   // `The larger of ${num1}  and ${num2}  is  ${num1}`
   container.innerHTML=` The larger of ${a}  and ${b} is ${result}`;
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

const taskThree =()=>{
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


