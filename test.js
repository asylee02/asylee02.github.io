const contents = document.querySelectorAll('.content');
for (let i = 0; i < contents.length; i++) {
  contents[i].style.color = 'red';
}

const blue_one=document.querySelectorAll('.pp');
for (let i = 0; i < blue_one.length; i++) {
  blue_one[i].style.color = 'blue';
}

const line=document.querySelector('.list-item');
  line.style.textDecoration ='line-through';

const purple=document.querySelector('#id99');
  purple.style.color ='purple';


  function colorChange() {
  
    var num = Math.floor(Math.random() * 256);
    var bodyTag = document.getElementById("colorCont");
    bodyTag.style.backgroundColor = color[num];
  }