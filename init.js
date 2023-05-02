// init parameters
const screenPHONE = 800;//px
const path_SLIDES = "AdSlides/";
let slidelist = []//[GDrive image id,amazon-Link or device-name]

// get namelist of all slides    
const xhr = new XMLHttpRequest();
xhr.open("GET", path_SLIDES+"namelist.json");
xhr.onreadystatechange = function() {
  if (this.readyState === this.DONE) {
    if (this.status === 200) {
      slidelist = JSON.parse(this.responseText);
      console.log(slidelist)
    } else {
      console.log("Error: " + this.status);
    }
  }
};
xhr.send();

// set href and src attriubtes
function init(){
    //optional: device browser screen tester
    //document.body.append("width:"+screen.width+" x height:"+screen.height+" | availWidth:"+screen.availWidth+" x availHeight:"+screen.availHeight);
    // webiste logo link
    $(".u-logo-image").attr("src","logo/logo.jpg")    
    $("a.u-logo").attr("href","#")
    // Navigation Tabs links
    $("a.nav-home").attr("href","#")
    $("a.nav-compare").attr("href","Comparison/comparison.html")
    $("a.nav-contact").attr("href","Contact/contact.html")
    $("a.nav-about").attr("href","About/about.html")
    // slideshow images
    renderSlides(document.querySelector("div.u-carousel-inner"));
    renderSlideDots(document.querySelector("ol.u-carousel-indicators"));
    // products list
    renderProducts()
    // social media links
    const social_links = {
        "facebook":null,
        "twitter":null,
        "instagram":"https://www.instagram.com/mr.affiliated",
        "linkedin":null,
        "youtube":null,
        "whatsapp":null
    }        
};//END: setValues()
