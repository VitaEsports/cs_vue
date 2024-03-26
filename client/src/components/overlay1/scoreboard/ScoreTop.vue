<script setup>
import ScoreTeamScoreAndMaps from './score/ScoreTeamScoreAndMaps.vue'
import ScoreTimeAndRounds from './score/ScoreTimeAndRounds.vue'
import ScoreTeamLeftMain from './teams/ScoreTeamLeftMain.vue'
import ScoreTeamRightMain from './teams/ScoreTeamRightMain.vue'
</script>

<template>
    <div class="hud_center_scoreboard_wrapper">
        <ScoreTeamLeftMain />
        <ScoreTeamScoreAndMaps />
        <ScoreTimeAndRounds />
        <ScoreTeamScoreAndMaps />
        <ScoreTeamRightMain />
      </div>
</template>

<style>

.hud_center_scoreboard_wrapper {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>