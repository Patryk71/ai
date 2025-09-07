const [red, green, blue] = [10, 200, 200]; //default site background colour
const [red_L, green_L, blue_L] = [255, 255, 255]; //red_L means red_letters etc.

const everything = document.querySelector('body'); // mapowanie elementów strony na zmienne
const glowne = document.querySelector('main')
const pojemniki_plus = document.querySelectorAll('.pojemnik_plus')
const pojemniki_minus = document.querySelectorAll('.pojemnik_minus')
let obecny_zoom = window.devicePixelRatio;


function colourfun(){   //funkcja zarządzająca kolorami podczsa scrollowania
    obecny_zoom = window.devicePixelRatio;
    let Y = window.scrollY/100*obecny_zoom;
    console.log('Y',Y)
    console.log('obecny zoom',obecny_zoom)
    console.log('2.5/obecny zoom',2.5/obecny_zoom)
    if (Y === 0){
        everything.style.backgroundColor = `rgb(${red},${green},${blue})`
        return
    }
    if (Y>2.5){
        let r = Math.min(200,Math.max(0,1-Math.round(red/(Y-2.5)))); //kolory tła 
        let g = Math.min(200,Math.max(0,Math.round(green/(Y-2.5))));
        let b = Math.min(200,Math.max(0,Math.round(blue/(Y-2.5))));
        everything.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    else{
        return
    }


    console.log(Y)   
}
function div_sizes_plus(){ //funkcja powiększająca divy podczas scrollowania w dół
    let Y_div = window.scrollY/3*obecny_zoom; //więkrzy dzielnik = wolniejsza animacja


    pojemniki_plus.forEach((element, index) => {
        let delay = 40+index*20 //więkrzy mnośnik = więkrze opóżnienie
        let slide_size = Math.min(45,Math.max(0, 0+Y_div-delay));
        element.style.width= `${slide_size}vw`;
    });
    
}

function div_sizes_minus(){ // funkcja pomniejszająca divy podczas scrollowania w dół
    let Y_div = window.scrollY/4*obecny_zoom;//więkrzy dzielnik = wolniejsza animacja


    pojemniki_minus.forEach((element, index) => {
        let delay = index*12//więkrzy mnośnik = więkrze opóżnienie
        let slide_size =Math.min(45,45-Y_div+delay);
        element.style.width= `${slide_size}vw`;
    });
    
}

    
window.addEventListener('scroll', colourfun);
window.addEventListener('scroll', div_sizes_plus);
window.addEventListener('scroll', div_sizes_minus);

