import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import BaseTitle from '@/components/base/BaseTitle.vue';
import BaseWorkoutTable from '@/components/base/BaseWorkoutTable.vue';
import BaseModal from './components/base/BaseModal.vue';
import BaseRadioButtons from './components/base/BaseRadioButtons.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('base-title', BaseTitle);
app.component('base-workout-table', BaseWorkoutTable);
app.component('base-modal', BaseModal);
app.component('base-radio-buttons', BaseRadioButtons);
app.component('base-button', BaseButton);
app.component('base-input', BaseInput);

app.mount('#app');
