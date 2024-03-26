<script setup>
import ScoreRounds from './ScoreRounds.vue'
import ScoreTime from './ScoreTime.vue'
</script>

<template>
    <div class="hud_center_score_game_info_wrapper">
        <div class="hud_center_score_game_info_time_rounds_wrapper">
          <ScoreTime />
          <ScoreRounds />
        </div>
      </div>
</template>

<style>

.hud_center_score_game_info_wrapper {
    width: 126px;
    height: 72px;
    background-color: var(--vita-v1-overlay-background);
    border-radius: 12px;
    padding: 4px 16px 8px;
  }

  .hud_center_score_game_info_time_rounds_wrapper {
    width: 100%;
    height: 100%;
    flex-flow: column;
    display: flex;
  }

</style>