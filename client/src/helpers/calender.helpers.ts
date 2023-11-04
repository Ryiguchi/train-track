/**
 *
 * @param dayNum: number // the day of the week as a number - 0 & Sunday basedLoginForm
 * @returns: number // the day of the week as a number - 1 & Monday based
 */
export const convertDayOfWeek = (dayNum: number) => {
  if (dayNum === 0) {
    return 6;
  } else {
    return dayNum - 1;
  }
};

export const convertDateToCalenderFormat = (date: string) => {
  const newDate = new Date(date);
  const monthName = newDate.toLocaleString('default', { month: 'long' });
  const day = newDate.getDate();
  let formattedDay;
  if (day === 1 || day === 21 || day === 31) {
    formattedDay = `${day}st`;
  } else if (day === 2 || day === 22) {
    formattedDay = `${day}nd`;
  } else if (day === 3 || day === 23) {
    formattedDay = `${day}rd`;
  } else {
    formattedDay = `${day}th`;
  }

  return `${monthName} ${formattedDay}`;
};

export const getDate = (direction: string, date: string) => {
  const current = new Date(date);

  let month = current.getMonth();
  let year = current.getFullYear();

  direction === 'back' ? month-- : month++;

  if (month === -1) {
    month = 11;
    year--;
  }

  if (month === 12) {
    month = 0;
    year++;
  }

  const tempDate = new Date(2000, month);
  const monthName = tempDate.toLocaleString('default', { month: 'long' });

  return `${monthName} ${year}`;
};

// GETTING THE CALENDER DATA FOR EACH MONTH
// date formatt must be "yyyy-mm"
export const filterScheduleData = (scheduleData: ISchedule[], date: string) => {
  return scheduleData.filter(event => event.date.startsWith(date));
};

export const convertToCalenderData = (
  scheduleData: ISchedule[],
  legendItems: ICalenderLegendItem[]
) => {
  const calenderData = scheduleData.map(event => {
    return {
      day: +event.date.slice(-2),
      color: legendItems.find(item => item.name === event.group)?.color,
    };
  });

  return calenderData;
};
/**
 *
 * @param date "October 2023"
 */
export const getCalenderData = (
  date: string,
  schedule: ISchedule[],
  legend: ICalenderLegendItem[]
) => {
  const filteredScheduleData = filterScheduleData(schedule, date);

  const calenderData = convertToCalenderData(filteredScheduleData, legend);

  return calenderData;
};

export const getCalenderDaysArray = () => {
  const date = 'October 2023';
  const displayedDate = new Date('October 2023');

  // previous month
  const lastDayOfPreviousMonthTimeStamp = displayedDate.setDate(0);
  const previousMonthNumber = displayedDate.getMonth();
  const lastDayOfPreviousMonth = new Date(lastDayOfPreviousMonthTimeStamp);

  const previousMonthLastDayNum = lastDayOfPreviousMonth.getDate();
  const previousMonthDayOfWeek = convertDayOfWeek(
    lastDayOfPreviousMonth.getDay()
  );

  //current month
  const daysInCurrentMonth = new Date(
    new Date(lastDayOfPreviousMonthTimeStamp + 3000000000).setDate(0)
  ).getDate();
  console.log(daysInCurrentMonth);

  let days = [];
  if (previousMonthDayOfWeek !== 6) {
    for (let i = 0; i <= previousMonthDayOfWeek; i++) {
      days.unshift(previousMonthLastDayNum - i);
    }
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    days.push(i);
  }

  const daysCurrentLength = days.length;
  for (let i = 1; i <= 42 - daysCurrentLength; i++) {
    days.push(i);
  }

  console.log(days);
};

export const getPrevMonthLastDayNum = (displayedDate: string) => {
  const timestamp = new Date(displayedDate).setDate(0);
  const lastDayOfPrevMonth = new Date(timestamp);

  const prevDayNum = lastDayOfPrevMonth.getDate();
  const prevWeekdayNum = convertDayOfWeek(lastDayOfPrevMonth.getDay());

  return {
    prevDayNum,
    prevWeekdayNum,
  };
};

export const getDaysInMonth = (date: string) => {
  const timestamp = new Date(date).setDate(0) + 3000000000;
  const lastDay = new Date(timestamp).setDate(0);
  const lastDayNum = new Date(lastDay).getDate();

  return lastDayNum;
};

export const getFullISODate = (monthISO: string, day: number) => {
  return `${monthISO}-${day.toString().padStart(2, '0')}`;
};
