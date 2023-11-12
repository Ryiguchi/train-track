import { createRouter, createWebHistory } from 'vue-router';

import SelectExerciseView from '@/views/SelectExercise/SelectExerciseView.vue';
import ExerciseView from '@/views/ExerciseView/ExerciseView.vue';
import SigninView from '@/views/SigninView/SigninView.vue';
import CalenderGroupView from '@/views/CalenderGroupView/CalenderGroupView.vue';
import WorkoutDayView from '@/views/WorkoutDayView/ WorkoutDayView.vue';
import CalenderExerciseView from '@/views/CalenderExerciseView/CalenderExerciseView.vue';
import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from 'pinia';
import { useToastStore } from '@/stores/toast.store';
import {
  signInFailedToast,
  signInSuccessToast,
} from '@/utils/helpers/toasts.helpers';
import StatisticsView from '@/views/StatisticsView/StatisticsView.vue';
import SettingsGroupView from '@/views/SettingsGroup/SettingsGroupView.vue';

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
      path: '/google-success',
      name: 'google-success',
      redirect: '/exercises',
    },
    {
      path: '/google-failed',
      name: 'google-failed',
      redirect: '/signin',
    },

    {
      path: '/exercises/:slug',
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
      path: '/calender/:slug',
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
      path: '/settings/group',
      name: 'group',
      component: SettingsGroupView,
    },

    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView,
    },

    {
      path: '/signin',
      name: 'signin',
      component: SigninView,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  const { isSignedIn } = storeToRefs(useUserStore());
  const { showToast } = useToastStore();

  if (to.fullPath === '/google-success') {
    showToast(signInSuccessToast);
    next({ name: 'select' });
    return;
  }

  if (to.fullPath === '/google-failed') {
    showToast(signInFailedToast('Sign in with google failed!'));
    next({ name: 'signin' });
    return;
  }

  if (to.name === 'signin' || isSignedIn.value) {
    next();
  } else {
    next({ name: 'signin' });
  }
});

export default router;
