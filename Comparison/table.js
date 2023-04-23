const path_DEVICES = "../Devices/";
// select header's <select> elements
const device1 = document.querySelector("th#device1").querySelector("#mobile-devices");
const device2 = document.querySelector("th#device2").querySelector("#mobile-devices");
const device3 = document.querySelector("th#device3").querySelector("#mobile-devices");

// append device names into the <options>
fetch(path_DEVICES+"namelist.txt")
.then(response => response.text())
.then(namelist => {
	namelist = namelist.trim().split("\n");
	namelist.forEach(name => {
		const option = document.createElement("option");
		option.value = name.replaceAll(" ","_");
		option.textContent = name;
		device1.appendChild(option);
		device2.appendChild(option.cloneNode(true));
		device3.appendChild(option.cloneNode(true));
  });
});

// set table heads
function renderTable() {
  const tbody = document.querySelector("section.u-section-2 tbody.u-table-body-1");
  const heads = ["Image",
                 "Brand",
                 "Model",
                 "Colors",
                 "Display Screen",
                 "Screen Glass",
                 "Brightness",
                 "Waterproof",
                 "Operating System (OS)",
                 "Processor (Chipset)",
                 "CPU",
                 "GPU",
                 "Card Slot",
                 "ROM (Storage)",
                 "RAM (Memory)",
                 "Battery",
                 "Charging Port",
                 "Charging Power",
                 "Wireless Charging" ,
                 "Camera Rear (Back)",
                 "Camera Front"      ,
                 "LED Flash Light",
                 "Front Flash",
                 "Wireless Display<br>(Screen Cast)",
                 "SIM",
                 "Internet Network",
                 "Wi-Fi",
                 "Bluetooth",
                 "NFC",
                 "Fingerprint",
                 "Audio Jack",
                 "Speaker Sound",
                 "In-Box Items",
                 "Manufacturer",
                 "Release Date",
                 "Price"]    
  // render table template
  heads.forEach((k,i)=>{
      const tr = document.createElement("tr")
      tr.innerHTML += `<td class="u-align-left u-border-1 u-border-grey-30 u-first-column u-table-cell u-table-cell-${i*4+5}">${k}</td>
                       <td id="device1-${k.replaceAll(/[() ]/gm,"")}" class="u-border-1 u-border-palette-5-dark-2 u-table-cell u-table-cell-${i*4+6}"></td>
                       <td id="device2-${k.replaceAll(/[() ]/gm,"")}" class="u-border-1 u-border-palette-5-dark-2 u-table-cell u-table-cell-${i*4+7}"></td>
                       <td id="device3-${k.replaceAll(/[() ]/gm,"")}" class="u-border-1 u-border-palette-5-dark-2 u-table-cell u-table-cell-${i*4+8}"></td>`
      // append data into the body of the table section
      tbody.appendChild(tr);
  })
};//END: renderTable()

// fetch the specifications of the selected device
function fetchDeviceSpecs(col) {
  // Get the selected col value from the dropdown menu
  name = document.querySelector("th#"+col).querySelector("#mobile-devices").value;
  console.log(col,name)
  // Fetch the corresponding device specifications from the server
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path_DEVICES + name + '.json', true);
  xhr.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
        // Parse the device specifications as a JSON object
        const device_DATA = JSON.parse(this.responseText);
        // Update the table cells with the device specifications
        document.getElementById(col + "-Image".replaceAll(/[() ]/gm,"")).style.backgroundImage = `url(${device_DATA.img})`;
        document.getElementById(col + "-Brand".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.brand;
        document.getElementById(col + "-Model".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.model;
        document.getElementById(col + "-Colors".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.color;
        document.getElementById(col + "-Display Screen".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.display.replaceAll("|","<br>");
        document.getElementById(col + "-Screen Glass".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.glass;
        document.getElementById(col + "-Brightness".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.brightness;
        document.getElementById(col + "-Waterproof".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.waterproof;
        document.getElementById(col + "-Operating System (OS)".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.os.replaceAll("|","<br>");
        document.getElementById(col + "-Processor (Chipset)".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.processor;
        document.getElementById(col + "-CPU".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.cpu.replaceAll("|","<br>");
        document.getElementById(col + "-GPU".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.gpu;
        document.getElementById(col + "-Card Slot".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["card slot"];
        document.getElementById(col + "-ROM (Storage)".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.storage.replaceAll(",",", ").replaceAll("|","<br>");
        document.getElementById(col + "-RAM (Memory)".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.ram.replaceAll(",",", ").replaceAll("|","<br>");
        document.getElementById(col + "-Battery".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.battery;
        document.getElementById(col + "-Charging Port".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["charging port"].replaceAll("|","<br>");
        document.getElementById(col + "-Charging Power".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["charging power"];
        document.getElementById(col + "-Wireless Charging".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["wireless charging"];
        document.getElementById(col + "-Camera Rear (Back)".replaceAll(/[() ]/gm,"")).innerHTML = (device_DATA["camera rear"]+"|Image: "+device_DATA["rear image"]).replaceAll("|","<br>");
        document.getElementById(col + "-Camera Front".replaceAll(/[() ]/gm,"")).innerHTML = (device_DATA["camera front"]+"|Image: "+device_DATA["front image"]).replaceAll("|","<br>");
        document.getElementById(col + "-LED Flash Light".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["led flash"];
        document.getElementById(col + "-Front Flash".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["front flash"];
        document.getElementById(col + "-Wireless Display<br>(Screen Cast)".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["wireless display"];
        document.getElementById(col + "-SIM".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["dual sim"].replaceAll("|","<br>");
        document.getElementById(col + "-Internet Network".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.network;
        document.getElementById(col + "-Wi-Fi".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.wifi;
        document.getElementById(col + "-Bluetooth".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.bluetooth;
        document.getElementById(col + "-NFC".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.nfc;
        document.getElementById(col + "-Fingerprint".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.fingerprint;
        document.getElementById(col + "-Audio Jack".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.audio;
        document.getElementById(col + "-Speaker Sound".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.speaker;
        document.getElementById(col + "-In-Box Items".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["in-box items"];
        document.getElementById(col + "-Manufacturer".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.manufacturer;
        document.getElementById(col + "-Release Date".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA["release date"];
        document.getElementById(col + "-Price".replaceAll(/[() ]/gm,"")).innerHTML = device_DATA.price.map(x=>"₹ "+x).join(" | ");
        document.querySelector("tfoot .u-btn-"+col.match(/[1-3]/gm)[0]).href = device_DATA.buy;

    } else {console.error(this.statusText)};
  };
  xhr.onerror = function () { console.error(xhr.statusText)};
  xhr.send(null);
}//END: fetchDeviceSpecs()
