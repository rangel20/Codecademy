let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 17;
if (runnerAge > 17 && isEarly) {
  raceNumber += 1000;
};
if (runnerAge > 17 && isEarly === true) {
  console.log(`You will race at 9:30 am. Your number: ${raceNumber}`);
} else if (runnerAge > 17 && isEarly === false) {
  console.log(`You will race at 11:00 am. Your number: ${raceNumber}`);
} else {
  console.log(`You will race at 12:30 am. Your number: ${raceNumber}`);
}