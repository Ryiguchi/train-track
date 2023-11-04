export {};

declare global {
  type ISet = {
    id: string;
    setNum: number;
    weight: number;
    reps: number;
  };

  interface IWorkoutQueryResult {
    id: number;
    date: string;
    exercise: string;
    sets: ISet[];
  }

  interface IAddWorkoutInput {
    date: string;
    sets: ISet[];
    exerciseId: number;
  }

  interface IDeletedWorkoutResult
    extends Omit<IWorkoutQueryResult, 'exercise'> {
    exerciseId: number;
  }

  // interface IWorkout {
  //   exerciseId: number;
  //   date: Date;
  //   sets: ISet[];
  // }
}
