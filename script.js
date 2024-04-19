function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navegacao').classList.toggle('active')
    
}


var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-p  agination",
  },
});



// let count =1;
// document.getElementById("radio1").checked = true;
//     nextImage();
// setInterval( function(){
// }, 4000)


// function nextImage(){
//     count++;
//     if(count>3){
//         count = 1;
//     }

//     document.getElementById("radio1"+count).checked = true;
// }


