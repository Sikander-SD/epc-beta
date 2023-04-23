// ----------------------------------------------- load slides

// Dynamically create slides and add them to the slideshow container
function renderSlides(container) {
    // set slides
    slidelist.forEach((sld,i)=>{i+=1
        const slide = document.createElement('div');        
        const attrs = {"class":`skrollable u-carousel-item u-clearfix u-container-align-center u-image u-image-contain u-parallax u-section-2-${i} skrollable-between`
                       // "style":`background-image: url("${path_SLIDES}slide${i}.png");`
        }
        Object.keys(attrs).forEach(key => slide.setAttribute(key, attrs[key]));
        if (sld.startsWith("http")) slide.setAttribute("style", `background-image: url(${sld});`)
        else slide.setAttribute("style", `background-image: url("https://drive.google.com/uc?export=view&id=${sld}");`)
                                

        if (i==1) slide.classList.add('u-active');        
        slide.innerHTML = `<div class="u-clearfix u-sheet u-sheet-1"></div>`;
        container.appendChild(slide);
    })
};//END: renderSlides()

// Dynamically create slide dots and add them to the slideshow
function renderSlideDots(container) {
    // set slide dots
    slidelist.forEach((_,i)=>{i+=1
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
// let slideInterval = setInterval(nextSlide, duration)
showSlide(slideIndex);

function nextSlide() {showSlide(slideIndex + 1)}
function prevSlide() {showSlide(slideIndex - 1)}

function showSlide(n) {try{
  
  const slides = document.querySelector("div.u-carousel-inner").children;
  const dots = document.querySelector("ol.u-block-67a6-2").children;
  
  if (n >= slides.length) { slideIndex = 0;}
  else if (n < 0) {         slideIndex = slides.length - 1;}
  else {                    slideIndex = n; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("u-active");
    dots[i].classList.remove("u-active");
  }
  slides[slideIndex].classList.add("u-active");
  dots[slideIndex].classList.add("u-active");

  // clearInterval(slideInterval);
  // slideInterval = setInterval(nextSlide, duration)
}catch(e){if (e.message.includes("Cannot read properties of undefined (reading 'classList')")) null}
// }finally{null}
};