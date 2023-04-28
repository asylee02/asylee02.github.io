const button = document.querySelector('.check');

button.addEventListener('click',() =>{
  const appear = document.querySelector('.result');
  const loading = document.querySelector('.loading_img');
  
  loading.style.display='block';  
  setTimeout(function() {
    loading.style.display='none';
    appear.style.display = 'block';
  }, 2000);
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

const gogo = document.querySelector('.gogo');

gogo.addEventListener('click',() =>{
const popup = document.querySelector('.popup')
  popup.style.display = 'block';
});


const real = document.querySelector('.real');

real.addEventListener('click',() =>{
const popup = document.querySelector('.popup')
  popup.style.display='none';
});

const share = document.querySelector('.share');

share.addEventListener('click',() =>{
  alert('URL이 복사되었습니다.');
  });