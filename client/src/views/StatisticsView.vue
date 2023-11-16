<script setup lang="ts">
import StatisticsLineChart from '@/components/Statistics/StatisticsLineChart.vue';
import StatisticsRadioButtons from '@/components/Statistics/StatisticsRadioButtons.vue';
import StatisticsPagination from '@/components/Statistics/StatisticsPagination.vue';
import BaseSelectInput from '@/components/Base/BaseSelectInput.vue';

import { useWorkoutsQuery } from '@/utils/composables/queries/useWorkoutsQuery';
import { EStatTypes, useStatistics } from '@/utils/composables/useStatistics';
import { useExercisesQuery } from '@/utils/composables/queries/useExerciseQuery';

// HOOKS
useWorkoutsQuery();
const { exerciseNames } = useExercisesQuery();
const {
  setCurrentExercise,
  setCurrentPeriod,
  setCurrentStatType,
  handleChangeDate,
  getData,
  currentPaginationDate,
} = useStatistics();
</script>

<template>
  <main>
    <div>
      <div class="input-wrapper">
        <label class="label" for="exercise">Choose an exercise:</label>
        <BaseSelectInput
          name="exercise"
          :items="exerciseNames"
          class="exercise-input"
          @selected-item="setCurrentExercise"
        />
      </div>
      <div class="input-wrapper">
        <label class="label" for="stat-type">Choose a statistics type:</label>
        <BaseSelectInput
          name="stat-type"
          :items="Object.values(EStatTypes)"
          @selected-item="setCurrentStatType"
        />
      </div>
    </div>
    <div>
      <StatisticsPagination
        class="pagination"
        :displayedDate="currentPaginationDate"
        @change-date="handleChangeDate"
      />
      <div class="chart-wrapper">
        <StatisticsLineChart v-if="getData" :data="getData" />
      </div>
    </div>
    <StatisticsRadioButtons
      :options="['Last 10', 'Month', 'Year']"
      @submit="setCurrentPeriod"
      class="period"
      ><label class="label">Choose a period:</label></StatisticsRadioButtons
    >
  </main>
</template>

<style scoped lang="sass">
main
  display: flex
  flex-direction: column
  gap: $sp_10

  .label
    display: block
    @include text-placeholder
    font-size: 1.4rem
    color: $c1
    margin-bottom: $sp_0

  .exercise-input
    margin-bottom: $sp_6
  .pagination
    margin-bottom: $sp_6
  .chart-wrapper
    height: 25rem
</style>
