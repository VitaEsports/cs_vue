<script setup>
import CurrentPlayerImage from './CurrentPlayerImage.vue'
import CurrentPlayerHpBar from './CurrentPlayerHpBar.vue'
import CurrentPlayerHPandArmor from './CurrentPlayerHPandArmor.vue'
import CurrentPlayerName from './CurrentPlayerName.vue'
import CurrentPlayerAmmo from './CurrentPlayerAmmo.vue'
</script>

<template>
    <div class="player_center_info_image_wrapper">
        <CurrentPlayerImage />
        <div class="player_center_wrapper">
          <CurrentPlayerHpBar />
          <div class="player_center_info_wrapper">
            <CurrentPlayerHPandArmor />
            <CurrentPlayerName />
            <CurrentPlayerAmmo />
          </div>
        </div>
      </div>
</template>

<style>

.player_center_info_image_wrapper {
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    display: flex;
  }

  .player_center_wrapper {
    z-index: 2;
    width: 298px;
    height: 36px;
    position: relative;
  }

  .player_center_info_wrapper {
    z-index: 2;
    width: 100%;
    height: 100%;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    background-color: var(--vita-v1-overlay-background);
    border-radius: 8px;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 8px;
    display: flex;
    position: relative;
  }

</style>