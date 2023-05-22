// init parameters
const path_SLIDES = "AdSlides/";
let slidelist = {};//{slide1:[GDrive image id,amazon-Link or device-name]}

// set href and src attriubtes
function init(){
    //optional: device browser screen tester
    //document.body.append("width:"+screen.width+" x height:"+screen.height+" | availWidth:"+screen.availWidth+" x availHeight:"+screen.availHeight);
    // webiste logo link
    $(".u-logo-image").attr("src","logo/logo-400x400.png")
    $("a.u-logo").removeAttr("href")
    // Navigation Tabs links
    $("a.nav-home").removeAttr("href")
    $("a.nav-compare").attr("href","Comparison/comparison.html")
    $("a.nav-contact").attr("href","Contact/contact.html")
    $("a.nav-about").attr("href","About/about.html")
    $("a.nav-feedback").attr("href","Feedback/feedback.html")
    // slideshow images
    renderSlides()
    // products list
    renderProducts()
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

};//END: setValues()
