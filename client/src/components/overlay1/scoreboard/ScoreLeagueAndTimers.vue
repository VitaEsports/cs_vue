<script setup>
import ScoreInfoLeftTimer from './other/ScoreInfoLeftTimer.vue'
import ScoreInfoRightTimer from './other/ScoreInfoRightTimer.vue';
import ScoreLeague from './other/ScoreLeague.vue';
</script>

<template>
    <div class="hud_center_lower_info_wrapper">
        <ScoreInfoLeftTimer />
        <ScoreLeague />
        <ScoreInfoRightTimer />
      </div>
</template>

<style>

.hud_center_lower_info_wrapper {
    width: 100%;
    height: 24px;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: row;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }

</style>