"use client";

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeTitle(title) {
  // List of words to ignore
  const smallWords = [
    "of",
    "with",
    "or",
    "and",
    "but",
    "for",
    "nor",
    "on",
    "at",
    "to",
    "by",
    "a",
    "an",
    "the",
    "in",
  ];

  // Function to capitalize the first letter of a word
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Split the title into words
  let words = title.split(" ");

  // Capitalize each word, except for the small words
  let capitalizedWords = words.map((word, index) => {
    // Always capitalize the first and last word
    if (index === 0 || index === words.length - 1) {
      return capitalize(word);
    }
    // Capitalize the word if it's not in the list of small words
    return smallWords.includes(word.toLowerCase())
      ? word.toLowerCase()
      : capitalize(word);
  });

  // Join the words back into a string
  return capitalizedWords.join(" ");
}
