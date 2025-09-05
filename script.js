const [red, green, blue] = [10, 200, 200]; //default site background colour
const [red_L, green_L, blue_L] = [255, 255, 255]; //red_L means red_letters etc.

const everything = document.querySelector('body'); // mapowanie elementów strony na zmienne
const glowne = document.querySelector('main')
const pojemniki_plus = document.querySelectorAll('.pojemnik_plus')
const pojemniki_minus = document.querySelectorAll('.pojemnik_minus')

function colourfun(){   //funkcja zarządzająca kolorami podczsa scrollowania
    let Y = window.scrollY/100;
    let Y_letters = window.scrollY/1000;
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
    let Y_div = window.scrollY/3; //więkrzy dzielnik = wolniejsza animacja
    if ( Y_div ===0){
        pojemniki_plus.style.width = '0vw';
    }

    pojemniki_plus.forEach((element, index) => {
        let delay = 40+index*20 //więkrzy mnośnik = więkrze opóżnienie
        let slide_size = Math.min(45,Math.max(0, 0+Y_div-delay));
        element.style.width= `${slide_size}vw`;
    });
    if (Y_div === 0){
        pojemniki_plus.style.width = '0vw';
        return
    }
}

function div_sizes_minus(){ // funkcja pomniejszająca divy podczas scrollowania w dół
    let Y_div = window.scrollY/4;//więkrzy dzielnik = wolniejsza animacja
    if ( Y_div ===0){
        pojemniki_plus.style.width = '45vw';
    }
    pojemniki_minus.forEach((element, index) => {
        let delay = index*18//więkrzy mnośnik = więkrze opóżnienie
        let slide_size =Math.min(45,45-Y_div+delay);
        element.style.width= `${slide_size}vw`;
    });
    if (Y_div === 0){
        pojemniki_minus.style.width = '45vw';
        return
    }
}

    
window.addEventListener('scroll', colourfun);
window.addEventListener('scroll', div_sizes_plus);
window.addEventListener('scroll', div_sizes_minus);

