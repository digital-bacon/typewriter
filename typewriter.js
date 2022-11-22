const typeWriter = (string, actionForEachCharacter, actionAfterTypeWriter, delay = 25) => {
  let timer = 0;
  for (const charIndex in string) {
    setTimeout(() => actionForEachCharacter(string[charIndex]), (timer += delay));
  }
  setTimeout(() => actionAfterTypeWriter(), timer);
}

const doStdOut = (string) => process.stdout.write(string);

const printNewLine = () => console.log('\n');

// TEST CASE:
const sentence = "hello there from lighthouse labs";
// Print each letter in the sentence to the terminal with a 50ms delay
// When done, print a new line
typeWriter(sentence, doStdOut, printNewLine, 50);
