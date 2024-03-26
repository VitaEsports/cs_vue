<script setup>
import PlayerMain from '../components/overlay1/player/PlayerMain.vue'
import CurrentPlayerMain from '../components/overlay1/currentPlayer/CurrentPlayerMain.vue'
import ScoreMain from '../components/overlay1/scoreboard/ScoreMain.vue'
</script>

<template>
  <body class="background">
    <div class="vita_v1">
      <div class="hud_top_wrapper">
        <ScoreMain />
        </div>
      <div class="hud_bottom_wrapper">
        <div class="players_wrapper">
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
        </div>
        <CurrentPlayerMain />
        <div class="players_wrapper">
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
          <PlayerMain />
        </div>
      </div>  
      </div>
  </body>
</template>

<style>

.background {
  font-family: Poppins sans-serif;
  line-height: 100%;
  font-size: 16px;
  font-weight: 800;
  min-height: 1080px;
  color: var(--brand--white);
}

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
  height: 100%;
  max-height: 1080px;
  max-width: 1920px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 37.5px 16px;
  position: relative;
}

</style>

<style>

.poppins_normal_10 {
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
}

.poppins_extrabold_10 {
  font-family: Poppins;
  font-size: 10px;
  font-weight: 800;
}

.poppins_extrabold_12 {
  font-family: Poppins;
  font-size: 12px;
  line-height: 100%;
  font-weight: 800;
}

.poppins_extrabold_16 {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 800;
}

.poppins_extrabold_20 {
  font-family: Poppins;
  line-height: 100%;
  font-weight: 800;
  font-size: 20px;
}

.poppins_extrabold_32 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 800;
}

.poppins_extrabold_48 {
  font-family: Poppins;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: 79%;
}

.inter_extrabold_8 {
  font-family: Inter, sans-serif;
  font-size: 8px;
  font-weight: 800;
}

.inter_extrabold_12 {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 800;
}

.inter_extrabold_16 {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 800;
}

.hud_center_score_team_name {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 800;
  line-height: 100%;
}

</style>


<style>

:root {
  --brand--white: white;
  --brand--secondary: #1a1a1a;
  --brand--white-50: grey;
  --brand--background: #0d0d0d;
  --brand--primary: #af0;
  --brand--accent: #5e10f9;
  --ov1_teamred: #ff285c;
  --ov1_teamblue: #417efd;
  --vita-v1-overlay-background: rgba(13, 13, 13, .9);
  --brand--white-75: #bfbfbf;
  --brand--mid-dark: #121212;
  --brand--white-25: #404040;
}

</style>

<style>

@font-face {
  font-family: 'Poppins';
  src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins';
  src: url('../assets/fonts/Poppins-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins';
  src: url('../assets/fonts/Inter-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter-ExtraBold.ttf') format('truetype'), url('../assets/fonts/Inter-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('../assets/fonts/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

</style>


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