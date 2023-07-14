const btn=document.querySelector('button');
const body=document.querySelector('body');
const color= ['yellow','blue','green','red','purple','pink'];
// body.style.backgroundColor='black';
document.addEventListener('click',function(){
      const colorIndex = parseInt(Math.random()*color.length);
      body.style.backgroundColor = color[colorIndex];
});