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
