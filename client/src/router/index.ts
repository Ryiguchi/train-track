import { createRouter, createWebHistory } from 'vue-router';

import SelectExerciseView from '@/views/SelectExerciseView.vue';
import ExerciseView from '@/views/ExerciseView.vue';
import SigninView from '@/views/SigninView.vue';
import CalenderGroupView from '@/views/CalenderGroupView.vue';
import WorkoutDayView from '@/views/WorkoutDayView.vue';
import CalenderExerciseView from '@/views/CalenderExerciseView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

import { useUserStore } from '@/stores/user.store';
import { storeToRefs } from 'pinia';
import { useToastStore } from '@/stores/toast.store';
import {
  signInFailedToast,
  signInSuccessToast,
} from '@/utils/helpers/toasts.helpers';
import StatisticsView from '@/views/StatisticsView.vue';
import SettingsGroupView from '@/views/SettingsGroupView.vue';
import SettingsExerciseView from '@/views/SettingsExerciseView.vue';
import SettingsUserView from '@/views/SettingsUserView.vue';

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
      name: 'group-settings',
      component: SettingsGroupView,
    },
    {
      path: '/settings/exercise',
      name: 'exercise-settings',
      component: SettingsExerciseView,
    },
    {
      path: '/settings/user',
      name: 'user-settings',
      component: SettingsUserView,
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
    { path: '/:pathMatch(.*)', component: NotFoundView },
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
