import {
  getCalenderData,
  getDate,
  getDaysInMonth,
  getFullISODate,
  getPrevMonthLastDayNum,
} from '@/utils/helpers/calender.helpers';
import { defineStore } from 'pinia';
import { useSavedWorkoutsStore } from './savedWorkouts.store';
import { type Group, type Schedule } from '@/lib/graphQL/gql/graphql';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';

export const useCalenderStore = defineStore('calender', {
  state() {
    return {
      schedule: [] as Schedule[],
      legendItems: [] as Group[],
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
    setSchedule(schedule: Schedule[]) {
      this.schedule = schedule;
    },

    setLegend(items: Group[]) {
      this.legendItems = items;
    },

    addSchedule(scheduleData: Schedule) {
      this.schedule.push(scheduleData);
    },

    changeMonth(direction: string) {
      this.displayedDate = getDate(direction, this.displayedDate);
    },

    getCalenderDaysArray(exercise: string | null = null): ICalenderDay[] {
      const exerciseColor = exercise
        ? useExercisesQuery().exercises.value.find(ex => ex.name === exercise)
            ?.group.color
        : undefined;

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
              workout => workout.exercise === exercise && workout.date === date
            )
              ? exerciseColor
              : undefined;
          }

          const daysData = {
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
            workout => workout.exercise === exercise && workout.date === date
          )
            ? exerciseColor
            : undefined;
        }

        const daysData = {
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
            workout => workout.exercise === exercise && workout.date === date
          )
            ? exerciseColor
            : undefined;
        }

        const daysData = {
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
