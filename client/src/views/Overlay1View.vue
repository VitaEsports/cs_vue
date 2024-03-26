<script setup>
import PlayerAlive from './components/overlay1/player/PlayerAlive.vue'
import CurrentPlayerMain from './components/overlay1/CurrentPlayer/CurrentPlayerMain.vue'
import ScoreMain from './components/overlay1/scoreboard/ScoreMain.vue'
</script>

<template>
<body class="background">
    <div class="vita_v1">
      <div class="hud_top_wrapper">
        <ScoreMain />
      <div class="hud_bottom_wrapper">
        <div class="players_wrapper">
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
          <PlayerAlive />
        </div>
        <CurrentPlayerMain />
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
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
  
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </body>
</template>