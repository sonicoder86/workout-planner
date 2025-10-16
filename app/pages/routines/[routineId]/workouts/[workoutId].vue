<script setup lang="ts">
const route = useRoute();
const workoutId = Number(route.params.workoutId);

const { data: response, error } = useFetch(`/api/workouts/${workoutId}`);

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Workout Not Found',
  })
}

const shouldDisplayName = (index: number) => {
  return response.value?.sets[index - 1]?.exercise?.name !== response.value?.sets[index]?.exercise?.name;
}
</script>

<template>
  <div v-if="!response" class="flex pt-24 items-center justify-center">
    <span class="loading loading-spinner loading-xl"></span>
  </div>

  <div v-if="response">
    <h1 class="text-lg font-bold pl-1 pt-1">
      <NuxtLink class="link" :to="`/routines/${response.workout.routine.id}`">{{ response.workout.routine.name }}</NuxtLink> - {{ response.workout.name }}
    </h1>

    <div>
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>RPE</th>
        </tr>
        </thead>

        <tbody>
          <tr v-for="(set, i) in response.sets" :key="`set_${set.id}`">
            <td>{{ shouldDisplayName(i) ? set.exercise.name : '' }}</td>
            <td>{{ set.reps }}</td>
            <td>{{ set.weight }}</td>
            <td>{{ set.difficulty ? set.difficulty : '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
