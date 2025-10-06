<template>
  <div class="flex flex-col gap-2 min-h-screen">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <Icon name="tabler:align-left" size="20" />
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base"
          >
            <li><a>Home</a></li>
            <li><a>Routines</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">Workout Planner</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <Icon name="tabler:search" size="20" />
        </button>
      </div>
    </div>
    <div class="px-3 flex-1">
      <NuxtPage />
    </div>
<!--    <div>Footer</div>-->
  </div>
</template>
