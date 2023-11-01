import { createRouter, createWebHistory } from 'vue-router';

import SelectExerciseView from '@/views/SelectExercise/SelectExerciseView.vue';
import ExerciseView from '@/views/ExerciseView/ExerciseView.vue';
import SigninView from '@/views/SigninView/SigninView.vue';
import CalenderGroupView from '@/views/CalenderGroupView/CalenderGroupView.vue';
import WorkoutDayView from '@/views/WorkoutDayView/ WorkoutDayView.vue';
import CalenderExerciseView from '@/views/CalenderExerciseView/CalenderExerciseView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/exercises',
    },
    {
      path: '/exercises',
      name: 'select',
      component: SelectExerciseView,
    },

    {
      path: '/exercises/:id',
      name: 'exercise',
      component: ExerciseView,
      props: true,
    },

    {
      path: '/calender',
      name: 'calender',
      component: CalenderGroupView,
    },
    {
      path: '/calender/:name',
      name: 'calenderExercise',
      component: CalenderExerciseView,
      props: true,
    },
    {
      path: '/workout/:date',
      name: 'calenderDay',
      component: WorkoutDayView,
      props: true,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView,
    },
  ],
});

export default router;
