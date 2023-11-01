export {};

declare global {
  interface IWorkout {
    id: string;
    exercise: IExercise;
    date: string;
    sets: IWorkoutSetData[];
  }
  interface IWorkoutSetData {
    id: string;
    setNum: number;
    weight: number;
    reps: number;
  }

  interface ISchedule {
    id: string;
    date: string;
    group: string;
  }

  interface IExercise {
    name: string;
    slug: string;
    group: string;
  }

  interface ILoginFormData {
    mode: string;
    email: string;
    password: string;
  }

  interface ICalenderLegendItem {
    name: string;
    color: string;
  }

  interface IScheduleDay {
    color?: string;
    day: number;
  }

  interface ICalenderDay {
    id: string;
    date: string;
    currentMonth: boolean;
    dayNum: number;
    color?: string;
  }

  interface ICalenderData {
    days: ICalenderDay[];
  }

  type TChangeMonthFn = (direction: string) => void;
}
