<script setup>
import PlayerExtraUtility from './PlayerExtraUtility.vue'
import PlayerMainArea from './PlayerMainArea.vue'
import PlayerUtilityGrid from './PlayerUtilityGrid.vue'
</script>

<template>
    <div class="player_alive_wrapper">
        <PlayerExtraUtility />
        <div class="player_grid">
          <PlayerMainArea />
          <PlayerUtilityGrid />
        </div>
      </div>
</template>

<style>

.player_alive_wrapper {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    display: flex;
  }

  .player_grid {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: column;
    align-items: center;
    display: flex;
  }

  
</style>