const hours = () => 11 - Math.floor(Math.random() * 8);

const getActualSleepHours = () => {
  const weekDays = ['sunday', 'monday', 'tuesday',
    'wednesday', 'thursday', 'friday', 'saturday'];
  const sleepHours = weekDays.reduce(r => r + hours(), 0);
  return sleepHours;
};

const getIdealSleepHours = ideal => ideal * 7;

const calculateSleepDebt = ideal => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(ideal);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed');
  } else {
    console.log(`You should get some rest.
    You need to sleep more ${idealSleepHours - actualSleepHours}`);
  }
  // console.log(actualSleepHours);
};

calculateSleepDebt(8);