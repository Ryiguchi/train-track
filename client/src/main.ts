import { createApp } from 'vue';
import { createPinia } from 'pinia';
import urql from '@urql/vue';
import { urqlClientOptions } from './config/urql.config';

import Root from './App.vue';
import router from './router';

import BaseTitle from '@/components/Base/BaseTitle.vue';
import BaseWorkoutTable from '@/components/Base/BaseWorkoutTable.vue';
import BaseModal from './components/Base/BaseModal.vue';
import BaseRadioButtons from './components/Base/BaseRadioButtons.vue';
import BaseButton from '@/components/Base/BaseButton.vue';
import BaseInput from '@/components/Base/BaseInput.vue';

const app = createApp(Root);

app.use(urql, urqlClientOptions);
app.use(createPinia());
app.use(router);

app.component('base-title', BaseTitle);
app.component('base-workout-table', BaseWorkoutTable);
app.component('base-modal', BaseModal);
app.component('base-radio-buttons', BaseRadioButtons);
app.component('base-button', BaseButton);
app.component('base-input', BaseInput);

app.mount('#app');
