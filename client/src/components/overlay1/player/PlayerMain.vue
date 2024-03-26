<script setup>
import PlayerAlive from './PlayerAlive.vue'
import PlayerDead from './PlayerDead.vue'
</script>

<template>
    <div class="player_wrapper">
        <PlayerAlive />
        <PlayerDead />
      </div>
</template>

<style>

.player_wrapper {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
  }

</style>