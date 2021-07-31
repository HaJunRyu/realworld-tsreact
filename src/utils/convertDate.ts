const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const currentYear = date.getFullYear();
  const currentMonth = month[date.getMonth()];
  const currentDate = date.getDate();

  return `${currentMonth} ${currentDate}, ${currentYear}`;
};

export default convertDate;
