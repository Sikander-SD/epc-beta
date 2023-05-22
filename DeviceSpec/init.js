// parameters
const path_DEVICES = "../Devices/";
const path_IMAGES = "../Devices/Images/";
const urlParams = new URLSearchParams(window.location.search);
const device_NAME = urlParams.get("device").replaceAll(" ","_")
let device_DATA=null,slidelist=[];

// set page title
document.querySelector("title").innerText = urlParams.get("device");

// set href and src attriubtes
function init(){
    // webiste logo link
    $(".u-logo-image").attr("src","../logo/logo-400x400.png")
    $("a.u-logo").attr("href","../index.html")
    // Navigation Tabs links
    $("a.nav-home").attr("href","../index.html")
    $("a.nav-compare").attr("href","../Comparison/comparison.html")
    $("a.nav-contact").attr("href","../Contact/contact.html")
    $("a.nav-about").attr("href","../About/about.html")
    $("a.nav-feedback").attr("href","../Feedback/feedback.html")
    // slideshow images and table data
    renderSlides_and_Table()
    // social media links
    const social_links = {
        "facebook":"https://www.facebook.com/100087793316866/",
        "twitter":null,
        "instagram":"https://www.instagram.com/elite.phones.club",
        "linkedin":null,
        "youtube":null,
        "whatsapp":null
    }
   Object.keys(social_links).forEach((k)=>{
        if (social_links[k]) { $("a[title='"+k+"']").attr("href",social_links[k]) }
        else { $("a[title='"+k+"']").attr("style","visibility:hidden;") }
    });
};
