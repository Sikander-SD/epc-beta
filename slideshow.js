// ----------------------------------------------- load slides

function renderSlides() {
  // get namelist of all slides    
  const xhr = new XMLHttpRequest();
  xhr.open("GET", path_SLIDES+"namelist.json");
  xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        slidelist = JSON.parse(this.responseText);
        console.log(slidelist)
        showSlides(document.querySelector("div.u-carousel-inner"));
        showSlideDots(document.querySelector("ol.u-carousel-indicators"));        
      } else { console.log("Error: " + this.status);}
    }
  };
  xhr.send();
};//END: renderSlides()

// Dynamically create slides and add them to the slideshow container
function showSlides(container) {
    // set slides
    Object.keys(slidelist).forEach((sld,i)=>{i+=1
        const slide = document.createElement('div');        
        const attrs = {"class":`skrollable u-carousel-item u-clearfix u-container-align-center u-image u-image-contain u-parallax u-section-2-${i} skrollable-between`,
                       "style":`background-image: url("https://drive.google.com/uc?export=view&id=${slidelist[sld][0]}")`
                       // "style":`background-image: url("${path_SLIDES}slide${i}.png");`
        }
        Object.keys(attrs).forEach(key => slide.setAttribute(key, attrs[key]));

        if (slidelist[sld][1].startsWith("http")) slide.onclick = ()=>{open(slidelist[sld][1],"_blank")}
        else slide.onclick = ()=>{open("DeviceSpec/devicespec.html?device="+slidelist[sld][1]+'"',"_blank")}
        if (i==1) slide.classList.add('u-active');        
        slide.innerHTML = `<div class="u-clearfix u-sheet u-sheet-1"></div>`;
        container.appendChild(slide);
    })
};//END: showSlides()

// Dynamically create slide dots and add them to the slideshow
function showSlideDots(container) {
    // set slide dots
    Object.keys(slidelist).forEach((_,i)=>{i+=1
        const dot = document.createElement('li');        
        const attrs = {"class":"u-active-custom-color-4 u-palette-3-light-1 u-shape-circle",
                       "style":"width: 12px; height: 12px;",
                       "data-u-slide-to":i,
                       "onclick":"showSlide(this.getAttribute('data-u-slide-to')-1)"
        }
        Object.keys(attrs).forEach(key => dot.setAttribute(key, attrs[key]));

        if (i==1) dot.classList.add('u-active');        
        container.appendChild(dot);
    })
};//END: renderSlideDots

//----------------------------------------- slide functionality
let slideIndex = 0, duration=6000;
let slideInterval = setInterval(nextSlide, duration)
showSlide(slideIndex);

function nextSlide() {showSlide(slideIndex + 1)}
function prevSlide() {showSlide(slideIndex - 1)}

function showSlide(n) {  
  const slides = document.querySelector("div.u-carousel-inner").children;
  const dots = document.querySelector("ol.u-block-67a6-2").children;
  if (slides.length && dots.length){
    if (n >= slides.length) { slideIndex = 0;}
    else if (n < 0) {         slideIndex = slides.length - 1;}
    else {                    slideIndex = n; }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("u-active");
      dots[i].classList.remove("u-active");
    }
    slides[slideIndex].classList.add("u-active");
    dots[slideIndex].classList.add("u-active");

    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, duration)
  }  
};
