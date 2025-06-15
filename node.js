const userChoice = process.argv[2];
const choices = ["1", "2", "3"];

if (!choices.includes(userChoice)) {
  console.log("Please choose a number between 1 and 3");
  process.exit();
}

const computerChoice = choices[Math.floor(Math.random() * 3)];

console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);

const userNum = parseInt(userChoice);
const compNum = parseInt(computerChoice);

if (compNum > userNum) {
  console.log("Wrong Choice, it's too small");
} else if (compNum < userNum) {
  console.log("Wrong Choice, it's too big");
} else {
  console.log("WoooW you have Win");
}
