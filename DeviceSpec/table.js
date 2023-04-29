// load device specifications on table

// set table with device data info
function renderTable() {
  const section = document.querySelector("section.u-section-3 div");  
  const ram = device_DATA.ram.split("|")
  const storage = device_DATA.storage.split("|")
  const price = device_DATA.price
  const C = price.length
  const heads = {"Compare all variants":(()=>(C>1)? [ram[0].split(","), storage[0].split(",")] : [[ram[0]],[storage[0]]] )(),
                 "Brand":device_DATA.brand,
                 "Model":device_DATA.model,
                 "Colors":device_DATA.color,
                 "Display Screen":device_DATA.display.replaceAll("|","<br>"),
                 "Screen Glass":device_DATA.glass,
                 "Brightness":device_DATA.brightness,
                 "Waterproof":device_DATA.waterproof,
                 "Operating System (OS)":device_DATA.os.replaceAll("|","<br>"),
                 "Processor (Chipset)":device_DATA.processor,
                 "CPU":device_DATA.cpu.replaceAll("|","<br>"),
                 "GPU":device_DATA.gpu,
                 "Card Slot":device_DATA["card slot"],
                 "ROM (Storage)":storage[0].split(",").map(s=>s+"<br>"+storage[1]),
                 "RAM (Memory)":ram[0].split(",").map(r=>r+"<br>"+ram[1]),
                 "Battery":device_DATA.battery,
                 "Charging Port":device_DATA["charging port"].replaceAll("|","<br>"),
                 "Charging Power":device_DATA["charging power"],
                 "Wireless Charging" :device_DATA["wireless charging"],
                 "Camera Rear (Back)":(device_DATA["camera rear"]+"|Image: "+device_DATA["rear image"]).replaceAll("|","<br>"),
                 "Camera Front"      :(device_DATA["camera front"]+"|Image: "+device_DATA["front image"]).replaceAll("|","<br>"),
                 "LED Flash Light":device_DATA["led flash"],
                 "Front Flash":device_DATA["front flash"],
                 "Wireless Display<br>(Screen Cast)":device_DATA["wireless display"],
                 "SIM":device_DATA["dual sim"].replaceAll("|","<br>"),
                 "Internet Network":device_DATA.network,
                 "Wi-Fi":device_DATA.wifi,
                 "Bluetooth":device_DATA.bluetooth,
                 "NFC":device_DATA.nfc,
                 "Fingerprint":device_DATA.fingerprint,
                 "Audio Jack":device_DATA.audio,
                 "Speaker Sound":device_DATA.speaker,
                 "In-Box Items":device_DATA["in-box items"],
                 "Manufacturer":device_DATA.manufacturer,
                 "Release Date":device_DATA["release date"],
                 "Price":device_DATA.price,
                 "buy":device_DATA.buy
                }
  console.log(heads)
  // set table title
  section.querySelector(".u-text-1").innerText = device_DATA.name
  // set table
  Object.keys(heads).forEach((k,i)=>{
    const tr = document.createElement("tr")
    
    // set table header
    if (k == "Compare all variants"){
      tr.innerHTML += `<td class="u-align-left u-border-1 u-border-grey-30 u-first-column u-table-cell u-table-cell-${i*4+1}">${k}</td>`
      price.forEach((_,ii)=>{tr.innerHTML += `<td class="u-border-3 u-border-grey-15 u-border-no-left u-border-no-right u-column-${ii+2} u-table-cell u-table-cell-${i*4+ii+2}"><b>${heads[k][0][ii]+" + "+heads[k][1][ii]}</b></td>`})
      // append data into the head of the table section
      section.querySelector("thead").appendChild(tr);
      
    // set table rows
    }else if (k != "buy"){
      tr.innerHTML += `<td class="u-align-left u-border-1 u-border-grey-30 u-first-column u-table-cell u-table-cell-${i*4+1}">${k}</td>`
      if ("ROM (Storage)RAM (Memory)".includes(k)) price.forEach((_,ii)=>{tr.innerHTML += `<td class="u-border-3 u-border-grey-15 u-border-no-left u-border-no-right u-data-column u-table-cell u-table-cell-${i*4+ii+2}">${heads[k][ii]}</td>`})
      else if (k == "Price") price.forEach((_,ii)=>{tr.innerHTML += `<td class="u-border-3 u-border-grey-15 u-border-no-left u-border-no-right u-cell-price u-data-column u-table-cell u-table-cell-${i*4+ii+2}">₹ ${heads[k][ii]}</td>`})
      else price.forEach((_,ii)=>{tr.innerHTML += `<td class="u-border-3 u-border-grey-15 u-border-no-left u-border-no-right u-column-${ii+2} u-table-cell u-table-cell-${i*4+ii+2}">${heads[k]}</td>`})
      // append data into the body of the table section
      section.querySelector("tbody").appendChild(tr);
      
    // set table footer
    }else{
      tr.innerHTML += `<td class="u-border-1 u-border-white u-table-cell u-table-cell-${i*4+1}"></td>`
      price.forEach((_,ii)=>{tr.innerHTML += `
        <td class="u-border-1 u-border-white u-table-cell">
          <a href="${heads[k]}" target="_blank" class="u-btn u-btn-round u-button-style u-radius-50 u-btn-${ii+1}">buy now</a>
        </td>`
      // append data into the footer of the table section
      section.querySelector("tfoot").appendChild(tr);      
      })
    }
  })  
};//END: renderTable()
