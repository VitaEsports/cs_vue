<template>
    <div class="hud_center_score_map_wins_wrapper">
        <div data-hudid="team_x_map_win_1" class="hud_center_score_wins_bar"></div>
        <div data-hudid="team_x_map_win_2" class="hud_center_score_wins_bar"></div>
        <div data-hudid="team_x_map_win_2" class="hud_center_score_wins_bar"></div>
      </div>
</template>

<style>

.hud_center_score_map_wins_wrapper {
    width: 100%;
    grid-column-gap: 3px;
    grid-row-gap: 3px;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .hud_center_score_wins_bar {
    width: 20px;
    height: 4px;
    background-color: var(--brand--white-50);
  }
  
  .hud_center_score_wins_bar.is-t {
    background-color: var(--ov1_teamred);
  }

</style>