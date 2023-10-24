import { createRouter, createWebHistory } from 'vue-router';

import TheHeader from '../components/UI/TheHeader.vue';
import SelectView from '@/views/SelectView.vue';

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
      component: SelectView,
    },

    {
      path: '/exercises/:id',
      name: 'exercise',
      component: TheHeader, // Exercise
      props: true,
    },

    {
      path: '/calender',
      name: 'calenderMonth',
      component: TheHeader,
      children: [
        {
          path: '/day',
          name: 'calenderDay',
          component: TheHeader,
        },
      ],
    },
    {
      path: '/calender/:id',
      name: 'calenderId',
      component: TheHeader,
      props: true,
    },
    {
      path: '/signin',
      name: 'signin',
      component: TheHeader,
    },
  ],
});

export default router;
