// Write a function named helloWorld that:
// Takes 1 argument, a language code (e.g. "es"
// ,// "de"// ,// "en")
// Returns "Hello, World" for the given language, for at least 3
// languages. It should default to returning English.
// Call that function for each of the supported languages and log
// the result to make sure it works

function helloWorld(languageCode) {
  let greeting;
  switch (languageCode) {
    default:
      greeting = "Hello, World";
      break;
      case "pt":
      greeting = "Olá, Mundo";
      break;
      case "es":
      greeting = "Hola, Mundo";
      break;
      case "de":
      greeting = "Hallo, Welt";
      break;
  }
  return greeting;
}

// Call the function for each supported language
console.log(helloWorld("en")); // English
console.log(helloWorld("es")); // Spanish
console.log(helloWorld("pt")); // Portuguese
console.log(helloWorld("de")); // German
document.getElementById("lang").innerText = "Greeting:  " + helloWorld("en");
document.getElementById("lang-es").innerText = "Greeting:  " + helloWorld("es");
document.getElementById("lang-pt").innerText = "Greeting:  " + helloWorld("pt");
document.getElementById("lang-de").innerText = "Greeting:  " + helloWorld("de");

