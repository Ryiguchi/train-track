import { computed, ref } from 'vue';
import { useWorkouts } from './useWorkouts';
import type { Workout } from '@/lib/graphQL/gql/graphql';
import { useCalender } from './useCalender';
import {
  getDaysInMonth,
  getMonthAbreviationFromIndex,
} from '../helpers/calender.helpers';
import { isStatType } from '@/lib/types/predicates';
import { useExercisesQuery } from './queries/useExerciseQuery';

interface IAveragedWorkouts {
  date: string;
  data: number | null;
}

export enum EStatTypes {
  WEIGHT = 'Total Weight',
  REPS = 'Total Reps',
  WEIGHT_REPS = 'Weight/Rep',
  WEIGHT_SETS = 'Weight/Set',
}

export function useStatistics() {
  // HOOKS
  const { filterByExercise } = useWorkouts();
  const { exerciseNames } = useExercisesQuery();
  const {
    currentYear,
    currentMonthAndYear,
    getISOFormattedPrevMonth,
    getISOFormattedNextMonth,
    isThisYear,
    isThisMonth,
  } = useCalender();

  // REFS
  const selectedExercise = ref(exerciseNames.value[0]);
  const selectedPeriod = ref<'Year' | 'Month' | 'Last 10'>('Last 10');
  const selectedStatType = ref<EStatTypes>(EStatTypes.WEIGHT);

  const selectedMonth = ref(currentMonthAndYear);
  const selectedYear = ref(currentYear);
  const last10Skip = ref(0);

  const currentPaginationDate = computed(() => {
    if (selectedPeriod.value === 'Year') {
      return selectedYear.value;
    }

    if (selectedPeriod.value === 'Month') {
      const monthLong = new Date(selectedMonth.value).toLocaleString('en-US', {
        month: 'long',
      });

      const year = selectedMonth.value.slice(0, 4);

      return `${monthLong} ${year}`;
    }

    if (selectedPeriod.value === 'Last 10') {
      return `Last ${10 * last10Skip.value + 1} - ${
        10 * (last10Skip.value + 1)
      }`;
    }

    return '';
  });

  // FUNCTIONS
  const getData = computed(() => {
    // -- filter by exercise
    const selectedWorkouts = filterByExercise(selectedExercise.value);
    let averagedWorkouts: IAveragedWorkouts[] = [];

    // -- filter by year / group by month
    if (selectedPeriod.value === 'Year') {
      const filteredWorkouts = filterByYear(
        selectedWorkouts,
        selectedYear.value
      );

      const groupedWorkouts = groupByMonth(filteredWorkouts);

      averagedWorkouts = getAveragedWorkouts(
        groupedWorkouts,
        selectedStatType.value,
        selectedPeriod.value
      );
    }

    // -- filter by month / group by day
    if (selectedPeriod.value === 'Month') {
      const filteredWorkouts = filterByMonth(
        selectedWorkouts,
        selectedMonth.value
      );

      const groupedWorkouts = groupByDay(filteredWorkouts, selectedMonth.value);

      averagedWorkouts = getAveragedWorkouts(
        groupedWorkouts,
        selectedStatType.value,
        selectedPeriod.value
      );
    }

    // -- filter by last 10
    if (selectedPeriod.value === 'Last 10') {
      const sortedWorkouts = sortWorkoutsByDate(selectedWorkouts);

      const startNum = 10 * last10Skip.value;
      const groupedWorkouts = sortedWorkouts.slice(startNum, startNum + 10);

      averagedWorkouts = formatLast10(groupedWorkouts, selectedStatType.value);
    }

    const chartData = convertToChartData(
      averagedWorkouts,
      selectedStatType.value,
      selectedPeriod.value,
      selectedMonth.value,
      selectedYear.value
    );

    return chartData;
  });

  function setCurrentExercise(exercise: string) {
    selectedExercise.value = exercise;
  }

  function setCurrentPeriod(period: string) {
    if (period !== 'Month' && period !== 'Year' && period !== 'Last 10') return;

    selectedPeriod.value = period;
  }

  function setCurrentStatType(statType: string) {
    if (isStatType(statType)) {
      selectedStatType.value = statType;
    }
  }

  function handleChangeDate(direction: number) {
    if (selectedPeriod.value === 'Year') {
      if (isThisYear(selectedYear.value) && direction > 0) return;

      const newYear =
        direction > 0 ? +selectedYear.value + 1 : +selectedYear.value - 1;

      selectedYear.value = newYear.toString();
    }

    if (selectedPeriod.value === 'Month') {
      if (isThisMonth(selectedMonth.value) && direction > 0) return;

      selectedMonth.value =
        direction > 0
          ? getISOFormattedNextMonth(selectedMonth.value)
          : getISOFormattedPrevMonth(selectedMonth.value);
    }

    if (selectedPeriod.value === 'Last 10') {
      if (last10Skip.value === 0 && direction > 0) return;

      last10Skip.value =
        direction > 0 ? last10Skip.value - 1 : last10Skip.value + 1;
    }
  }

  return {
    setCurrentExercise,
    setCurrentPeriod,
    setCurrentStatType,
    handleChangeDate,
    currentPaginationDate,
    getData,
  };
}

// HELPER FUNCTIONS

function filterByYear(selectedWorkouts: Workout[], year: string) {
  return selectedWorkouts.filter(workout => workout.date.startsWith(year));
}

function filterByMonth(selectedWorkouts: Workout[], month: string) {
  return selectedWorkouts.filter(workout => workout.date.startsWith(month));
}

function groupByMonth(filteredWorkouts: Workout[]) {
  const workoutsByMonth = [];

  for (let i = 1; i <= 12; i++) {
    const monthlyWorkouts = filteredWorkouts.filter(workout => {
      return workout.date.slice(5, 7) === i.toString().padStart(2, '0');
    });

    workoutsByMonth.push(monthlyWorkouts);
  }

  return workoutsByMonth;
}

function groupByDay(filteredWorkouts: Workout[], selectedMonth: string) {
  const numDays = getDaysInMonth(selectedMonth);

  const workoutsByDay = [];

  for (let i = 1; i <= numDays; i++) {
    const dailyWorkouts = filteredWorkouts.filter(
      workout => workout.date.slice(8) === i.toString().padStart(2, '0')
    );
    workoutsByDay.push(dailyWorkouts);
  }
  return workoutsByDay;
}

function getAveragedWorkouts(
  workouts: Workout[][],
  statType: EStatTypes,
  period: string
) {
  let averagedWorkouts: IAveragedWorkouts[] = [];

  workouts.forEach((workoutArr, i) => {
    // -- get current month abrev.
    let date: string = '';
    if (period === 'Year') {
      date = getMonthAbreviationFromIndex(i);
    } else if (period === 'Month') {
      date = (i + 1).toString().padStart(2, '0');
    }

    if (workouts.length === 0) {
      averagedWorkouts.push({
        date,
        data: null,
      });
      return;
    }

    let data: number = 0;

    let totalReps = 0;
    let totalWeight = 0;
    let totalSets = 0;

    workoutArr.forEach(workout => {
      totalWeight += workout.totalWeight;
      totalReps += workout.totalReps;
      totalSets += workout.sets.length;
    });

    if (statType === EStatTypes.WEIGHT) {
      data = +(totalWeight / workoutArr.length).toFixed(1);
    }

    if (statType === EStatTypes.REPS) {
      data = +(totalReps / workoutArr.length).toFixed(1);
    }

    if (statType === EStatTypes.WEIGHT_REPS) {
      data = +(totalWeight / totalReps).toFixed(1);
    }

    if (statType === EStatTypes.WEIGHT_SETS) {
      data = +(totalWeight / totalSets).toFixed(1);
    }

    // -- return month and data
    averagedWorkouts.push({ date, data });
  });

  return averagedWorkouts;
}

function convertToChartData(
  averagedWorkouts: IAveragedWorkouts[],
  statType: EStatTypes,
  period: 'Year' | 'Month' | 'Last 10',
  month: string,
  year: string
) {
  const labels = averagedWorkouts.map(period => period.date);
  const data = averagedWorkouts.map(period => period.data);

  return {
    labels,
    datasets: [{ data, label: statType, statType, period, month, year }],
  };
}

function sortWorkoutsByDate(selectedWorkouts: Workout[]) {
  return selectedWorkouts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function formatLast10(workouts: Workout[], statType: EStatTypes) {
  const formatedWorkouts: IAveragedWorkouts[] = [];

  workouts.forEach(workout => {
    let data: number = 0;
    const totalSets = workout.sets.length;

    if (statType === EStatTypes.WEIGHT) {
      data = workout.totalWeight;
    }

    if (statType === EStatTypes.REPS) {
      data = workout.totalReps;
    }

    if (statType === EStatTypes.WEIGHT_REPS) {
      data = +(workout.totalWeight / workout.totalReps).toFixed(1);
    }

    if (statType === EStatTypes.WEIGHT_SETS) {
      data = +(workout.totalWeight / totalSets).toFixed(1);
    }

    formatedWorkouts.unshift({
      date: workout.date,
      data,
    });
  });

  return formatedWorkouts;
}
