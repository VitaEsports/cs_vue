<script setup>
import ScoreTop from './ScoreTop.vue'
import ScoreLeagueAndTimers from './ScoreLeagueAndTimers.vue';
</script>

<template>
    <div class="hud_center_wrapper">
        <ScoreTop />
        <ScoreLeagueAndTimers />
      </div>
</template>

<style>

.hud_center_wrapper {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
    align-items: center;
    display: flex;
  }

</style>