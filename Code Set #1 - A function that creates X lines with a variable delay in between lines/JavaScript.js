function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
    
    
    
async function functionNameHere() {
    const variableNameHere = document.getElementById(" ID-HERE ");
  
  console.log("Creating 5 lines");
    for (let i = 0; i < 5; i++) {
      const p = document.createElement("p");
      p.textContent = `>_`;
      container1.appendChild(p);
      await delay(50);
    };
    
    console.log("Created 5 lines");
    await delay(100);
    console.log("Showing DIRECTORY BUTTONS");
      // Use this function if needed. ( Useful for showing buttons or activating another function that is supposed to run after this one )
      // functionName();
      
};
