<script setup>
import ScoreTeamMaps from './ScoreTeamMaps.vue'
import ScoreTeamScore from './ScoreTeamScore.vue'
</script>

<template>
    <div class="hud_center_team_score_wrapper">
        <div class="hud_center_score_and_map_wins_wrapper">
          <ScoreTeamMaps />
          <ScoreTeamScore />
        </div>
      </div>
</template>

<style>

.hud_center_team_score_wrapper {
  width: 75px;
  height: 72px;
  background-color: var(--vita-v1-overlay-background);
  border-radius: 12px;
  padding: 8px;
}

.hud_center_score_and_map_wins_wrapper {
  width: 100%;
  height: 100%;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  flex-flow: column;
  display: flex;
}

</style>