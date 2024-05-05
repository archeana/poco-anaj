// Assign new varibles
const mainHeading = document.getElementsByTagName("h1");
const paragraph = document.getElementById("paragraph");
const links = document.getElementById("links");

// h1 write a loop with 2 interations always adding the numbe rof interation
//to the content of the tag after the existing content

// Loop through each <h1> element
for (let i = 0; i < 2; i++) {
   // Retrieve the original text content of the current <h1> element
   const newHeading = document.createElement("h1");

   // Append the original text content to itself
   newHeading.textContent = i + " " + mainHeading.textContent;
   // Append it after the existing <h1> element
   mainHeading.parentNode.insertBefore(newHeading, mainHeading.nextSibling);
}


// // For the p variable write a loop with 4 iterations, always adding
// the number of the iteration to the content of the tag (before the
//     existing content).
for (let t = 0; t < 5; t++) {
   // Create a new <p> element
   const newParagraph = document.createElement("p");
   // Set its text content
   newParagraph.textContent = t + " " + paragraph.textContent;
   // Insert it before the existing <p> element
   paragraph.parentNode.insertBefore(newParagraph, paragraph);
}

//     
   for (let l = 1; l < 8; l++) { // Loop runs 6 times because there's already one <a> element
      // Create a new <a> element
      const newLink = document.createElement("a");
      // Set its text content
      newLink.textContent = l + " " + links.textContent;
      // Append it after the existing <a> element
      links.insertAdjacentElement('afterend', newLink);
   }
