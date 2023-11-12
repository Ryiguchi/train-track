import { graphql } from '@/lib/graphQL/gql';

//QUERIES

export const EXERCISES_AND_GROUPS_QUERY = graphql(/* GraphQL */ `
  query ExercisesAndGroups {
    exercises: exercisesByUserId {
      id
      name
      slug
      group {
        name
        color
        id
      }
    }

    groups: groupsByUserId {
      id
      name
      color
    }

    isTodaysGroupSet
  }
`);

export const PREVIOUS_WORKOUT_QUERY = graphql(`
  query PreviousWorkout($exerciseId: Int!) {
    previousWorkout(exerciseId: $exerciseId) {
      id
      date
      exercise
      sets {
        id
        setNum
        weight
        reps
      }
    }
  }
`);

export const WORKOUTS_QUERY = graphql(`
  query Workouts {
    workouts: workoutsByUserId {
      id
      date
      exercise
      sets {
        id
        setNum
        weight
        reps
      }
    }
  }
`);

export const SCEDULE_QUERY = graphql(`
  query Schedule {
    schedule: scheduleByUserId {
      id
      date
      group {
        name
        color
        id
      }
    }
  }
`);

// MUTATIONS

export const ADD_EXERCISE = graphql(`
  mutation AddExercise($exerciseData: ExerciseData!) {
    addExercise(exerciseData: $exerciseData) {
      id
      name
      slug
      group {
        name
        color
        id
      }
    }
  }
`);

export const SET_TODAYS_GROUP = graphql(`
  mutation SetTodaysGroup($scheduleData: ScheduleInput!) {
    addScheduleDay(scheduleData: $scheduleData) {
      id
      date
      group {
        name
        color
        id
      }
    }
  }
`);

export const ADD_WORKOUT = graphql(`
  mutation AddWorkout($workoutData: AddWorkoutInput!) {
    addWorkout(workoutData: $workoutData) {
      id
      date
      sets {
        id
        setNum
        weight
        reps
      }
      exercise
    }
  }
`);

export const ADD_GROUP = graphql(`
  mutation AddGroup($addGroupData: AddGroupInput!) {
    addGroup(addGroupData: $addGroupData) {
      id
      name
      color
    }
  }
`);

export const UPDATE_GROUP = graphql(`
  mutation UpdateGroup($updateGroupData: UpdateGroupInput!) {
    updateGroup(updateGroupData: $updateGroupData) {
      id
      name
      color
    }
  }
`);

export const DELETE_GROUP = graphql(`
  mutation DeleteGroup($id: Int!) {
    deleteGroup(id: $id) {
      id
      name
      color
    }
  }
`);
