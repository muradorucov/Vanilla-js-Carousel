
const slideContainer = document.querySelector(".slider-container");
const slideImg = document.getElementById("sliderimg");
const next = document.getElementById("next");

if (slideImg) {
  let slidesSrc = [
      "./img/img1.jpg",
      "./img/img2.jpg",
      "./img/img3.jpg"
  ];

  let i = 0;

  const slider = () => {
      slideImg.src = slidesSrc[i];
    
      slideContainer.style.backgroundImage = `url('${slidesSrc[i]}')`;
      slideImg.classList.add('fade-in');

      (i < slidesSrc.length - 1) ? i++ : i = 0;
  };

  slider(); // Start slider immediately
  setInterval(slider, 4000); // Slide every 4 seconds
}


next.addEventListener("click", ()=>{
})
