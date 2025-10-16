<script setup lang="ts">
const route = useRoute();
const routineId = Number(route.params.routineId);
const { data: routine, error } = useFetch(`/api/routines/${routineId}`);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Routine Not Found',
  })
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <div v-if="!routine" class="flex pt-24 items-center justify-center">
      <span class="loading loading-spinner loading-xl"></span>
    </div>

    <h1 v-if="routine" class="text-lg font-bold pl-1 pt-1">{{ routine.name }}</h1>

    <ul v-if="routine" class="list bg-base-100 rounded-box shadow-md">
      <li v-for="workout in routine.workouts" :key="`workout_${workout.id}`" class="list-row">
        <div class="flex items-center list-col-grow">
          <NuxtLink :to="`/routines/${routine.id}/workouts/${workout.id}`">
            <div>[{{ workout.id }}] {{ workout.name }}</div>
          </NuxtLink>
        </div>
        <button class="btn btn-square btn-ghost">
          <Icon name="tabler:eye" size="24" />
        </button>
      </li>
    </ul>
  </div>
</template>
