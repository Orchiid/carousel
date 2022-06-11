/**
 * Define Global Variables
 * 
*/
const slider = document.getElementById('slider');
const slides = document.querySelectorAll(".slides");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const sliderVar =()=>{
    let div1 = document.createElement('div'); 
    div1.className='slides';
    div1.innerHTML = `<img src="../images/img1.jpg" id='img' class='img-responsive' />`
    let div2 = document.createElement('div');
    div2.className='slides';
    div2.innerHTML = `<img src="../images/img2.jpg" id='img' class='img-responsive' />`
    let div3 = document.createElement('div');
    div3.className='slides';
    div3.innerHTML = `<img src="../images/img3.jpg" id='img' class='img-responsive' />`
    let div4 = document.createElement('div');
    div3.className='slides';
    div4.innerHTML = `<img src="../images/img4.jpg" id='img' class='img-responsive' />`
    slider.append(div1, div2, div3, div4);    
    slider.style.cssText = 'display: flex;margin: 0;padding: 0;width: 100%;max-width: 800px;height: 350px;position: relative;overflow: hidden; border-radius: 15px;';
}
sliderVar();

let move = document.querySelectorAll('slider slides');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), move.length-1);
  move[index].scrollIntoView({behavior: 'smooth'});
}

