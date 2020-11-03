const sentence = "hello there from lighthouse labs";
let time = 0;
const length = sentence.length;
const returnDelay = length*50;

for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time)
    time += 50; 

}

setTimeout (() => {
  process.stdout.write("\n");
}, returnDelay)
  
