<template>
    <div class="hud_center_score_left_team_wrapper">
        <div class="hud_center_score_left_team_name_and_logo_wrapper">
          <div class="hud_center_score_team_name_and_logo">
            <div class="hud_center_score_team_name_wrapper">
              <div data-hudid="team_1_tag" class="hud_center_score_team_name">&lt;tag&gt;</div>
            </div><img src="@/assets/VITA_Esports.svg" loading="lazy" data-hudid="team_1_logo" alt="" class="hud_center_score_team_logo">
          </div>
          <div data-hudid="team_1_color" class="hud_center_score_team_color"></div>
        </div>
      </div>
</template>

<style>

.hud_center_score_team_logo {
  width: 42px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.hud_center_score_left_team_wrapper {
    width: 195px;
    height: 56px;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    display: flex;
  }

  .hud_center_score_left_team_name_and_logo_wrapper {
    width: 100%;
    height: 100%;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    background-color: var(--vita-v1-overlay-background);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    flex-flow: row;
    align-items: center;
    padding-left: 24px;
    display: flex;
  }

  .hud_center_score_team_name_and_logo {
    width: 100%;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .hud_center_score_team_name_wrapper {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .hud_center_score_team_color {
    width: 8px;
    height: 100%;
    background-color: var(--ov1_teamblue);
  }
  
  .hud_center_score_team_color.is-t {
    background-color: var(--ov1_teamred);
  }

</style>