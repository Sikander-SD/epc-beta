// parameters
const screenPHONE = 800;//px
const path_DEVICES = "../Devices/";
const urlParams = new URLSearchParams(window.location.search);
const device_NAME = urlParams.get("device").replaceAll(" ","_")
let device_DATA=null,slidelist=[];

// set page title
document.querySelector("title").innerText = urlParams.get("device");

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
    // slideshow images and table data
    renderSlides_and_Table()
    // social media links
    const social_links = {
        "facebook":null,
        "twitter":null,
        "instagram":"https://www.instagram.com/mr.affiliated",
        "linkedin":null,
        "youtube":null,
        "whatsapp":null
    }
   Object.keys(social_links).forEach((k)=>{
        if (social_links[k]) { $("a[title='"+k+"']").attr("href",social_links[k]) }
        else { $("a[title='"+k+"']").attr("style","visibility:hidden;") }
    });
};
