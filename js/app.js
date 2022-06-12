/**
 * Define Global Variables
 * 
*/
const slider = document.getElementById('slider');
const slides = document.querySelectorAll(".slides");
const body = document.querySelector('body');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const sliderVar =()=>{
    let slider = document.createElement('div');
    let span1 = document.createElement('span');
    slider.style.cssText = 'display:flex;width: 100%;max-width: 800px;height: 350px;position: relative; border-radius: 15px;overflow: hidden';
    span1.className='slides'
    span1.innerHTML = `<img src="../images/img1.jpg" id='img image1' class='img-responsive' />`
    span1.innerHTML += `<img src="../images/img2.jpg" id='img' class='img-responsive' />`
    span1.innerHTML += `<img src="../images/img3.jpg" id='img' class='img-responsive' />`
    span1.innerHTML += `<img src="../images/img4.jpg" id='img' class='img-responsive' />`
    slider.append(span1);
    slider.innerHTML+=`<button class="btn prev">&lt;</button>`
    slider.innerHTML+=`<button class="btn next">&gt;</button>`
    body.append(slider);    
}

sliderVar();

const styles = `
.slides {
    width: 100%;
    max-width: 800px;
    height: 350px;
    position: absolute;
    transition: all 0.5s;
  } 
  .next , .prev{
    position: absolute;
    top: 50%;
    cursor: pointer;
  }
  .next.disable , .prev.disable{
    opacity: 0.5;
    pointer-events: none;
  }
  .slides img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    object-fit: cover;
  }
  .slides img:first-of-type{
    left: 0;
  }
  .btn {
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    z-index: 10px;
    cursor: pointer;
    background-color: #fff;
    font-size: 18px;
  }
  .btn:active {
    transform: scale(1.1);
  }
  .prev {
    top: 45%;
    left: 2%;
  }
  .next {
    top: 45%;
    right: 2%;
  }
`

const styleSheet = document.createElement('style');
styleSheet.innerText = styles
document.head.appendChild(styleSheet);

const img = document.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function stopBtn(){
    if(num>= img.length-1){
        next.classList.add('disable');
    }else{
        next.classList.remove('disable');
    }
    
    if(num === 0){
        prev.classList.add('disable');
    }else{
        prev.classList.remove('disable');
    }
}
let num = 0;
next.addEventListener('click', ()=>{
    img[num].style.left = '100%';
    num++;
    img[num].style.left = '0%';

    stopBtn();
});

prev.addEventListener('click', ()=>{
    img[num].style.left = '-100%';
    num--;
    img[num].style.left = '0%';
    
    stopBtn();
});
