console.log('hello word');

const h1 = document.querySelector('h1');
console.log(h1);

const content = document.querySelector('.content');
console.log(content);

const explore = document.querySelector('#explore')
explore.addEventListener('click', ()=>{
  h1.style.color= '#03a8f4';
  
})