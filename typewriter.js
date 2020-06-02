const sentence = "hello there from lighthouse labs";

for (let i = 0; i <= sentence.length; i++) {
  setTimeout(() => {
    if (i === sentence.length) {
      console.log("");
    } else {
      process.stdout.write(sentence[i])
    }
  }, i * 50);
};
