const typeWriter = (string, actionForEachCharacter, delay = 25) => {
  let timer = 0;
  for (const charIndex in string) {
    setTimeout(() => actionForEachCharacter(string[charIndex]), (timer += delay));
  }
}

const doStdOut = (string) => process.stdout.write(string);

// TEST CASE:
const sentence = "hello there from lighthouse labs";
// Print each letter in the sentence to the terminal with a 50ms delay
typeWriter(sentence, doStdOut, 50);
