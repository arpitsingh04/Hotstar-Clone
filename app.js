let carousel = document.querySelector(".carousel");
let slider = [];

let sliderIndex = 0;

const crateSlide = () => { 
  if (sliderIndex >= movies.length) {
    sliderIndex = 0;
  }
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[sliderIndex].name));
  p.appendChild(document.createTextNode(movies[sliderIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[sliderIndex].image;
  sliderIndex++;

  slide.className = "slider";
  content.className = "slider-content";
  h1.className = "movie-title";
  p.className = "movie-desc";

  slider.push(slide);

  if (slider.length) {
    slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;

  }
};

for (let i = 0; i < 6; i++) {
  crateSlide();
}

setInterval(() => {
    crateSlide();
},3000);




// video cards ( in this video will play when we hover)

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        let video = item.children[1];
        video.play();
})
item.addEventListener('mouseleave', ()=>{
    let video = item.children[1];
    video.pause();
})
} )



