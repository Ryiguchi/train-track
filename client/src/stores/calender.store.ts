import {
  getCalenderData,
  getDate,
  getDaysInMonth,
  getFullISODate,
  getPrevMonthLastDayNum,
} from '@/helpers/calender.helpers';
import { getSchedule } from '@/helpers/dummy-data/dummy-schedule';
import { defineStore } from 'pinia';
import uniqid from 'uniqid';
import { useSavedWorkoutsStore } from './savedWorkouts.store';

const legendItems = [
  { name: 'push', color: 'blue' },
  { name: 'pull', color: 'green' },
  { name: 'legs', color: 'orange' },
];

export const useCalenderStore = defineStore('calender', {
  state() {
    return {
      schedule: getSchedule(),
      legendItems,
      displayedDate: new Date().toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      }),
    };
  },

  getters: {
    getISOFormattedDisplayedMonth(state): string {
      const dateTimestamp = new Date(this.displayedDate).setDate(15);
      return new Date(dateTimestamp).toISOString().slice(0, 7);
    },

    getISOFormattedPrevMonth(state): string {
      const dateTimestamp = new Date(this.displayedDate).setDate(15);
      return new Date(dateTimestamp - 3000000000).toISOString().slice(0, 7);
    },

    getISOFormattedNextMonth(state): string {
      const dateTimestamp = new Date(this.displayedDate).setDate(15);
      return new Date(dateTimestamp + 3000000000).toISOString().slice(0, 7);
    },

    getCalenderDataForDisplayedMonth(state): IScheduleDay[] {
      const formattedDate = this.getISOFormattedDisplayedMonth;

      return getCalenderData(formattedDate, this.schedule, this.legendItems);
    },

    getCalenderDataForPreviousMonth(state): IScheduleDay[] {
      const formattedDate = this.getISOFormattedPrevMonth;

      return getCalenderData(formattedDate, this.schedule, this.legendItems);
    },

    getCalenderDataForNextMonth(state): IScheduleDay[] {
      const formattedDate = this.getISOFormattedNextMonth;

      return getCalenderData(formattedDate, this.schedule, this.legendItems);
    },

    isTodaysGroupSet(state): boolean {
      const today = new Date().toISOString().slice(0, 10);
      return this.schedule.some(day => day.date === today);
    },
  },

  actions: {
    addSchedule(scheduleData: ISchedule) {
      this.schedule.push(scheduleData);
    },

    changeMonth(direction: string) {
      this.displayedDate = getDate(direction, this.displayedDate);
    },

    getCalenderDaysArray(exercise: string | null = null): ICalenderDay[] {
      const { prevDayNum, prevWeekdayNum } = getPrevMonthLastDayNum(
        this.displayedDate
      );

      const daysInMonth = getDaysInMonth(this.displayedDate);

      let days = [];

      if (prevWeekdayNum !== 6) {
        for (let i = prevDayNum; i >= prevDayNum - prevWeekdayNum; i--) {
          const date = getFullISODate(this.getISOFormattedPrevMonth, i);

          let color: string | undefined;

          if (!exercise) {
            color = this.getCalenderDataForPreviousMonth.find(
              workout => workout.day === i
            )?.color;
          } else {
            color = useSavedWorkoutsStore().workouts.find(
              workout =>
                workout.exercise.name === exercise && workout.date === date
            )
              ? 'blue'
              : undefined;
          }

          const daysData = {
            id: uniqid(),
            date,
            currentMonth: false,
            dayNum: i,
            color,
          };

          days.unshift(daysData);
        }
      }

      for (let i = 1; i <= daysInMonth; i++) {
        const date = getFullISODate(this.getISOFormattedDisplayedMonth, i);

        let color: string | undefined;

        if (!exercise) {
          color = this.getCalenderDataForDisplayedMonth.find(
            workout => workout.day === i
          )?.color;
        } else {
          color = useSavedWorkoutsStore().workouts.find(
            workout =>
              workout.exercise.name === exercise && workout.date === date
          )
            ? 'blue'
            : undefined;
        }

        const daysData = {
          id: uniqid(),
          date,
          currentMonth: true,
          dayNum: i,
          color,
        };
        days.push(daysData);
      }

      const daysCurrentLength = days.length;
      for (let i = 1; i <= 42 - daysCurrentLength; i++) {
        const date = getFullISODate(this.getISOFormattedNextMonth, i);

        let color: string | undefined;

        if (!exercise) {
          color = this.getCalenderDataForNextMonth.find(
            workout => workout.day === i
          )?.color;
        } else {
          color = useSavedWorkoutsStore().workouts.find(
            workout =>
              workout.exercise.name === exercise && workout.date === date
          )
            ? 'blue'
            : undefined;
        }

        const daysData = {
          id: uniqid(),
          date,
          currentMonth: false,
          dayNum: i,
          color,
        };
        days.push(daysData);
      }

      return days;
    },
  },
});
