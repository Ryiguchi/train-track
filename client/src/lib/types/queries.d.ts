import type {
  CombinedError,
  OperationContext,
  UseQueryResponse,
  UseQueryState,
} from '@urql/vue';
import type { ComputedRef, Ref } from 'vue';
import type {
  Exercise,
  ExercisesAndGroupsQuery,
  Group,
  Schedule,
  Set,
  Workout,
} from '../graphQL/gql/graphql';

export {};

declare global {
  interface TExerciseReturn
    extends Pick<UseQueryState, 'data' | 'error' | 'fetching'> {
    exercises: ComputedRef<Exercise[]>;
    groups: ComputedRef<IGroupWithEnum[]>;
    groupNames: ComputedRef<string[]>;
    isTodaysGroupSet: ComputedRef<boolean>;
    exerciseNames: ComputedRef<string[]>;
    refreshExercises: () => void;
  }

  type TUsePreviosQueryReturn = {
    previousWorkoutSets: ComputedRef<Set[]>;
  };

  type TUseScheduleQueryReturn = {
    schedule: ComputedRef<Schedule[]>;
  };
}
