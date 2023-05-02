// parameters
const path_DEVICES = "../Devices/";
const urlParams = new URLSearchParams(window.location.search);
const device_NAME = urlParams.get("device").replaceAll(" ","_")
let device_DATA,lslidelist;

// set page title
document.querySelector("title").innerText = urlParams.get("device");

// get device from namelist of devices
const xhr = new XMLHttpRequest();
xhr.open("GET", path_DEVICES + device_NAME + ".json",true);
xhr.onreadystatechange = function() {
   if (this.readyState === 4){
       if (this.status === 200) {
           device_DATA = JSON.parse(this.responseText)
           slidelist = device_DATA.slides1.concat(device_DATA.slides2);
           console.log(slidelist)
       }
       else {console.error(this.statusText)}
   }
   this.onerror = function () {console.error(this.statusText)}
};//END: xhr()
xhr.send(null);

// set href and src attriubtes
function init(){
    // webiste logo link
    $(".u-logo-image").attr("src","../logo/logo.jpg")    
    $("a.u-logo").attr("href","../index.html")
    // Navigation Tabs links
    $("a.nav-home").attr("href","../index.html")
    $("a.nav-compare").attr("href","../Comparison/comparison.html")
    $("a.nav-contact").attr("href","../Contact/contact.html")
    $("a.nav-about").attr("href","../About/about.html")
    // slideshow images
    renderSlides(document.querySelector("div.u-carousel-inner"));
    renderSlideDots(document.querySelector("ol.u-carousel-indicators"));
    // products list
    renderTable()
    // social media links
    const social_links = {
        "facebook":null,
        "twitter":null,
        "instagram":"https://www.instagram.com/mr.affiliated",
        "linkedin":null,
        "youtube":null,
        "whatsapp":null
    }
};
