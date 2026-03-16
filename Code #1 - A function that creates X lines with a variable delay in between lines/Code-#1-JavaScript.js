
// programmer's note
// I used console.log() for debug notes, change these to print whatever


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function createLines() {

  const textContainer1 = document.getElementById("textcontainer");

  for (let i = 0, i < 4, i++) {
    // use this for testing, comment when dont testing
    const para1 = document.createElement("p")

    // uncomment this line when done testing
    // const blankLine = document.createElement("br");
    
    textContainer1.appendChild(blankLine)
    console.log("Created 1 blank line")
    await delay(50)
  }

// OPTIONAL ADD
  
}
