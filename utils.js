// init parameters
const screenPHONE = 800;//px
// set image resolutions for cameras based on MP
const Reso ={"5":"~2592 x 1944p",
		"8":"~3264 x 2448p",
		"13":"~4160 x 3120p",
		"16":"~4920 x 3684p",
		"20":"~5472 x 4104p",
		"24":"~6000 x 4500p",
		"32":"~6720 x 5040p",
		"48":"~8000 x 6000p",
		"50":"~8192 x 6144p",
		"64":"~9216 x 6912p"
	};
const getReso = (cam,img)=>{
    if (!img) img = Reso[cam.split(" MP")[0]]
    else if (!img.endsWith("p")) img+="p"	  
    return cam+"|Image: "+img
  }

// fetch product price
function updatePrice(url){
  const xhr = new XMLHttpRequest();
  const parser = new DOMParser();
  url = url.startsWith("https:")?url:("https:"+url)
  
  return new Promise((price,err)=>{      
    xhr.open("GET",url);
    xhr.onreadystatechange = function() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          const htmlDoc = parser.parseFromString(this.responseText, "text/html");
          const p = htmlDoc.querySelector(".price").innerText.match(/[0-9](.*)[0-9]/gm)
          //resolve
          if (p) price(p)
          else console.log(url,htmlDoc);err("")
          
        } else { console.log("Error: " + this.status);}
      }
    };
    xhr.send();    
  })
};//END: updatePrice()


