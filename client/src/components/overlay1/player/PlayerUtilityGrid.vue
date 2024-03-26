<script setup>
import PlayerUtility from './PlayerUtility.vue'
import PlayerWeapon from './PlayerWeapon.vue'
</script>

<template>
<div class="player_utility_grid">
    <div class="player_utility_align_wrapper">
      <div data-hudid="player_0_utility_flash" class="player_utility_icon">
        <svg width="100%" height="100%" viewbox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
          <PlayerUtility />
    </div>
    <PlayerWeapon />
  </div>
</template>

<style>

.player_utility_grid {
    width: 100%;
    height: 36px;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    background-color: var(--vita-v1-overlay-background);
    border-radius: 8px;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    padding: 8px 4px;
    display: flex;
  }

.player_utility_align_wrapper {
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    display: flex;
  }

.player_utility_icon {
    width: 9px;
    height: 12px;
    justify-content: center;
    align-items: center;
    display: none;
  }

</style>