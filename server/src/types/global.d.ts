export {};

declare global {
  // GENERAL

  interface IStringIndexSig<T> {
    [key: string]: T;
  }

  type ISet = {
    id: string;
    setNum: number;
    weight: number;
    reps: number;
  };

  interface IWorkout {
    exerciseId: number;
    date: Date;
    sets: ISet[];
  }

  // WORKOUTS

  interface IWorkoutFormatted {
    id: number;
    date: string;
    exercise: string;
    sets: ISet[];
  }

  type TExerciseWithName = {
    name: string;
  };

  // EXERCISE

  interface IExerciseFormatted {
    id: number;
    name: string;
    slug: string;
    group: string;
  }

  type TGroupWithName = {
    name: string;
  };

  interface IExerciseInput {
    name: string;
    slug: string;
    groupId?: number;
  }

  // SCHEDULE

  interface IScheduleFormatted {
    id: number;
    date: string;
    group: string;
  }

  // GROUP
  interface IGroupDBResult {
    id: number;
    name: string;
  }
}
