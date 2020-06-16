const container = document.querySelector('.container');
document.query
const firstInt = document.querySelector('.first');
const secondInt = document.querySelector('.second');
const taskOne = ()=>{
   greaterThan(firstInt.value, secondInt.value);
   
}
const taskTwo =()=>{
   iterateData();
}
const greaterThan = (a,b)=>{
   let result;
   const compareData= a>b;
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
const iterateData = ()=>{
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
const anotherLoop = ()=>{
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


