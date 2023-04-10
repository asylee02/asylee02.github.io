const button = document.querySelector('.check');

button.addEventListener('click',() =>{
  const appear = document.querySelector('.result');
  appear.style.display = 'block';
});

button.addEventListener('click',() =>{
  const text1 = document.querySelector('.dept').value;
  const text2 = document.querySelector('.time').value;
  const output1= document.querySelector('.output1');
  const output2= document.querySelector('.output2');

  output1.innerText = text1;
  const ans = 10000/text2
  output2.innerText = ans;
})