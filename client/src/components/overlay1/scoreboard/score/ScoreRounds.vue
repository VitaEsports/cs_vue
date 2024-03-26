<template>
    <div class="hud_center_score_game_info_rounds_and_count_wrapper">
        <div class="inter_extrabold_8">ROUND</div>
        <div class="hud_center_score_game_info_rounds_wrapper">
          <div data-hudid="game_current_round" class="inter_extrabold_8">00</div>
          <div class="inter_extrabold_8">/</div>
          <div data-hudid="game_round_max" class="inter_extrabold_8">00</div>
        </div>
      </div>
</template>

<style>

.hud_center_score_game_info_rounds_and_count_wrapper {
    width: 100%;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .hud_center_score_game_info_rounds_wrapper {
    display: flex;
  }

</style>