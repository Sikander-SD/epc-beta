// set href and src attriubtes
function setValues(){
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
    Object.keys(social_links).forEach((k)=>{
        if (social_links[k]) { $("a[title='"+k+"']").attr("href",social_links[k]) }
        else { $("a[title='"+k+"']").attr("style","visibility:hidden;") }
    })
    //
    

        
};//END: setValues()
