<script setup lang="ts">
import { routines } from "~/types/routine";

const route = useRoute();
const routineId = Number(route.params.routineId);
const routine = routines.find(({ id }) => id === routineId);

if (!routine) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Routine Not Found',
  })
}

const workoutId = Number(route.params.workoutId);
const workout = routine.workouts.find(({ id }) => id === workoutId);

if (!workout) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Workout Not Found',
  })
}
</script>

<template>
  <div>
    <h1 class="text-lg font-bold pl-1 pt-1">{{ routine.name }} - {{ workout.name }}</h1>
  </div>
</template>

<style scoped>

</style>