// Delay function (needed along side the preset function)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Preset function
async function directorySelect() {
  
  const container2 = document.getElementById("ID-HERE")
  
  
  for (let a = 0; a < 5; a++) {
    await delay(100)
    const p = document.createElement("p");
    if (a == 0) {
      p.textContent = `EXAMPLE-TEXT-1`;
      container2.appendChild(p)
    } else if (a == 1) {
      p.textContent = `EXAMPLE-TEXT-2`;
      container2.appendChild(p)
    } else if (a == 2) {
      p.textContent = `EXAMPLE-TEXT-3`;
      container2.appendChild(p)
    }  else if (a == 3) {
      p.textContent = `EXAMPLE-TEXT-4`;
      container2.appendChild(p)
    } else if (a == 4) {
      p.textContent = `EXAMPLE-TEXT-5`;
      container2.appendChild(p)
    }
  }

   directorySelectP2()
}
