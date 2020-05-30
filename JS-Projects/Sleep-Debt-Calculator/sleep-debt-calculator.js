const hours = () => Math.floor(Math.random() * 11);

const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return hours();
    case 'tuesday':
      return hours();
    case 'wednesday':
      return hours();
    case 'thursday':
      return hours();
    case 'friday':
      return hours();
    case 'saturday':
      return hours();
    case 'sunday':
      return hours();
  }
};

const getActualSleepHours = () => {
  const weekDays = ['sunday', 'monday', 'tuesday',
    'wednesday', 'thursday', 'friday', 'saturday'];
  const sleepHours = weekDays.reduce((r, d) => r + getSleepHours(d), 0);
};

const getIdealSleepHours = () => {
  const idealHours = 10;
  return idealHours * 7;
};