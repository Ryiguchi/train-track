export function useCalender() {
  const date = new Date();
  const currentYear = date.getFullYear().toString();
  const currentMonthAndYear = date.toISOString().slice(0, 7);

  function getISOFormattedPrevMonth(currentMonth: string) {
    const dateTimestamp = new Date(currentMonth).setDate(15);
    return new Date(dateTimestamp - 3000000000).toISOString().slice(0, 7);
  }

  function getISOFormattedNextMonth(currentMonth: string) {
    const dateTimestamp = new Date(currentMonth).setDate(15);
    return new Date(dateTimestamp + 3000000000).toISOString().slice(0, 7);
  }

  function isThisYear(year: string) {
    const thisYear = new Date().toLocaleString('en-US', { year: 'numeric' });
    return year === thisYear;
  }

  function isThisMonth(monthAndYear: string) {
    const arr = monthAndYear.split('-');
    const month = arr[1];
    const year = arr[0];

    if (!isThisYear(year)) return false;

    const thisMonthNum = new Date().getMonth() + 1;
    const thisMonthString = thisMonthNum.toString().padStart(2, '0');

    if (month === thisMonthString) {
      return true;
    } else {
      return false;
    }
  }

  return {
    currentYear,
    currentMonthAndYear,
    getISOFormattedPrevMonth,
    getISOFormattedNextMonth,
    isThisYear,
    isThisMonth,
  };
}
