<script setup>
import ScoreTeamLeftInfo from './ScoreTeamLeftInfo.vue';
import ScoreTimeout from '../score/ScoreTimeout.vue'
</script>

<template>
    <div class="hud_center_score_wrapper">
        <ScoreTimeout />
        <ScoreTeamLeftInfo />
      </div>
</template>

<style>

.hud_center_score_wrapper {
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  display: flex;
}

</style>