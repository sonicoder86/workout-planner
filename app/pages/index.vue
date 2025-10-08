<script setup lang="ts">
import { routines } from "~/types/routine";
</script>

<template>
  <div>
    <h1 class="text-lg font-bold pl-1 pt-1">Routines</h1>

    <ul class="list bg-base-100 rounded-box shadow-md">
      <li v-for="routine in routines" :key="`routine_${routine.id}`" class="list-row">
        <div><img class="size-10 rounded-box" :src="routine.image"/></div>
        <div class="flex items-center">
          <NuxtLink :to="`/routines/${routine.id}`">
            <div>{{ routine.name }}</div>
          </NuxtLink>
        </div>
        <button class="btn btn-square btn-ghost">
          <Icon name="tabler:eye" size="24" />
        </button>
      </li>
    </ul>
  </div>
</template>
