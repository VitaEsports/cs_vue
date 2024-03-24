<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PlayerAlive from './components/overlay1/player/PlayerAlive.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <div class="vita_v1">
      <div class="hud_top_wrapper">
      <div class="hud_bottom_wrapper">
        <div class="players_wrapper">
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
        </div>
      </div>  
      </div>
    </div>
  </body>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<style>

.players_wrapper {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
}

.hud_bottom_wrapper {
  width: 100%;
  grid-column-gap: 64px;
  grid-row-gap: 64px;
  justify-content: center;
  align-items: stretch;
  display: flex;
}

.hud_top_wrapper {
  width: 100%;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

.vita_v1 {
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  max-width: 1920px;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 37.5px 16px;
  display: flex;
  position: relative;
}

</style>