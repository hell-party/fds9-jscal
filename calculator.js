let ops = document.querySelectorAll('.op');
console.log(ops)
let total =document.querySelector('.op-eql')
let num_btn = document.querySelectorAll('.num');
let display = document.querySelector('.display')
let newnum = '';
let displayvalue = '';
let arr = [];
for(let i = 0; i<num_btn.length;i++){
  num_btn[i].addEventListener('click',()=>{
  newnum +=  num_btn[i].textContent;
  display.innerHTML = newnum;
  displayvalue = newnum;
  // if(newnum[0] === '0'){
  //   newnum = '';
  //   displayvalue = newnum;
  // }
  })
}
// 곱하기
ops[4].addEventListener('click', ()=>{
  total_num = 0;
  newnum = '';
  arr.push(displayvalue)
 total_num += parseFloat(arr[0])* parseFloat(arr[1]) 
})
// 더하기
ops[6].addEventListener('click',()=>{
  total_num = 0;
  newnum = '';
  arr.push(displayvalue)
 total_num += parseFloat(arr[0])+ parseFloat(arr[1]) 
})
// 뺴기
ops[5].addEventListener('click',()=>{
  total_num = 0;
  newnum = '';
  arr.push(displayvalue)
 total_num += parseFloat(arr[0]) - parseFloat(arr[1]) 
})
// 나누기
ops[3].addEventListener('click',()=>{
  total_num = 0;
  newnum = '';
  arr.push(displayvalue)
 total_num += parseFloat(arr[0]) / parseFloat(arr[1]) 
})
<<<<<<< HEAD
// 초기화
ops[0].addEventListener('click',()=>{
  newnum = '0';
  display.innerHTML = newnum;
})
// 토탈
total.addEventListener('click',() =>{
=======

// 초기화
ops[0].addEventListener('click',()=>{
  newnum = '0';
  total_num = 0;
  display.innerHTML = newnum;
  display.innerHTML += total_num;

})
// 토탈
total.addEventListener('click',() =>{

>>>>>>> c5b29a139c8d00cec92ac1d29b4bed78358432dc
  display.innerHTML = total_num;
})

// 문제점
// 1. 계산결과가 바로안나오고 사칙연산 버튼을 2번씩 넣어줘야 값이나온다.
<<<<<<< HEAD
// 2. AC를 눌렀을때 저장된 값이 초기화가 안된다. 디스플레이만 초기화됨.
=======
// 2. AC를 눌렀을때 저장된 값이 초기화가 안된다. 디스플레이만 초기화됨.
>>>>>>> c5b29a139c8d00cec92ac1d29b4bed78358432dc
