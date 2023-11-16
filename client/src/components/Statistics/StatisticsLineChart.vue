<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  LineElement,
  type ChartOptions,
} from 'chart.js';
import { toRefs } from 'vue';
import { Line } from 'vue-chartjs';
import { chartOptions } from '@/config/chart.config';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// PROPS
const props = defineProps<{ data: IChartData }>();

// REFS
const { data } = toRefs(props);

const chartOnClick: ChartOnClick = (event, element, chart: ICustomChart) => {
  if (element.length > 0) {
    const index: number = element[0].index;

    const data = chart._metasets[0]._dataset.data[index];
    console.log(chart._metasets[0]._dataset.data[index]);
  }
};
</script>

<template>
  <Line
    v-if="data"
    :data="data"
    :options="(chartOptions as unknown as ChartOptions)"
  />
</template>
