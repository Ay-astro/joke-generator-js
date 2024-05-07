const button = document.querySelector(".btn");
const div = document.querySelector('.joke');

const getJoke =()=>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
  xhr.onreadystatechange = function (){
    if(this.readyState === 4){
      if(this.status === 200){
        div.innerHTML = JSON.parse(this.responseText).value
      }else{
        div.innerHTML = 'something is wrong this not funny'
      }
    }
  };

  xhr.send();
};




button.addEventListener('click', getJoke)
document.addEventListener('DOMContentLoaded', getJoke)