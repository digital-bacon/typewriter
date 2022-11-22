/**
 * Function that prints each character of a given string to the node
 * terminal
 * @param {string} string - The string to print to the terminal
 * @param {Function} actionForEachCharacter - Callback to execute for each
 * character in the string
 * @param {Function} actionAfterTypeWriter - Callback to execute after the
 * string has been printed to the terminal
 * @param {number} [delay] - The delay between printing each new character to
 * the terminal
 */
const typeWriter = (string, actionForEachCharacter, actionAfterTypeWriter, delay = 25) => {
  let timer = 0;
  for (const charIndex in string) {
    setTimeout(() => actionForEachCharacter(string[charIndex]), (timer += delay));
  }
  setTimeout(() => actionAfterTypeWriter(), timer);
};

/**
 * Prints a given string to the node terminal
 * @param {string} string - The string to print to the terminal
 */
const doStdOut = (string) => process.stdout.write(string);

/**
 * Prints a new line with `console.log`
 */
const printNewLine = () => console.log('\n');

// TEST CASE:
const sentence = "hello there from lighthouse labs";
// Print each letter in the sentence to the terminal with a 50ms delay
// When done, print a new line
typeWriter(sentence, doStdOut, printNewLine, 50);
