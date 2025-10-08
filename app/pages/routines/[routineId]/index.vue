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
</script>

<template>
  <div>
    <h1 class="text-lg font-bold pl-1 pt-1">{{ routine.name }}</h1>

    <ul class="list bg-base-100 rounded-box shadow-md">
      <li v-for="workout in routine.workouts" :key="`workout_${workout.id}`" class="list-row">
        <div class="flex items-center list-col-grow">
          <NuxtLink :to="`/routines/${routine.id}/workouts/${workout.id}`">
            <div>{{ workout.name }}</div>
          </NuxtLink>
        </div>
        <button class="btn btn-square btn-ghost">
          <Icon name="tabler:eye" size="24" />
        </button>
      </li>
    </ul>
  </div>
</template>
