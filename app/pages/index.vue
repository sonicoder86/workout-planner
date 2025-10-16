<script setup lang="ts">
const { data: routines } = useFetch('/api/routines');
</script>

<template>
  <div class="flex flex-col flex-1">
    <h1 class="text-lg font-bold pl-1 pt-1">Routines</h1>

    <div v-if="!routines" class="flex pt-24 items-center justify-center">
      <span class="loading loading-spinner loading-xl"></span>
    </div>
    <ul v-else class="list bg-base-100 rounded-box shadow-md">
      <li v-for="routine in routines" :key="`routine_${routine.id}`" class="list-row">
        <div><img class="size-10 rounded-box" :src="routine.cover || ''"/></div>
        <div class="flex items-center">
          <NuxtLink :to="`/routines/${routine.id}`">
            <div>[{{ routine.id }}] {{ routine.name }}</div>
          </NuxtLink>
        </div>
        <button class="btn btn-square btn-ghost">
          <Icon name="tabler:eye" size="24" />
        </button>
      </li>
    </ul>
  </div>
</template>
