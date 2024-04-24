let authorName = prompt("Please enter Author name");
let quoteName;

while (authorName === null || authorName === "") {
  authorName = prompt("Cannot continue without a name");
}

do {
  quoteName = prompt("Please enter a quote");
} while (quoteName === null || quoteName === "")


alert(authorName  + " says \"" + quoteName + "\" ");

