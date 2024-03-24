<script setup>
import PlayerImage from './PlayerImage.vue';
import PlayerHPandArmor from './PlayerHPandArmor.vue';
import PlayerName from './PlayerName.vue';
import PlayerKills from './PlayerKills.vue';
import PlayerDeaths from './PlayerDeaths.vue';
import PlayerMoney from './PlayerMoney.vue';
</script>

<template>
  <div class="player_hp_area_wrapper">
    <div data-hudid="player_0_hp_bar" class="player_hp_bar"></div>
      <PlayerImage />
    <div data-hudid="player_0_hp_bar" class="player_hp_bar_gradient"></div>
    <div class="player_hp_bar_info">
      <PlayerHPandArmor />
      <PlayerName />
      <div class="player_stats_wrapper">
        <PlayerKills />
      </div>
      <PlayerDeaths />
      <PlayerMoney />
    </div>
  </div>
</template>

<style>

.player_hp_area_wrapper {
  width: 135px;
  height: 100px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  background-color: var(--vita-v1-overlay-background);
  border-radius: 8px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  display: flex;
  position: relative;
  overflow: visible;
}

.player_hp_bar {
  z-index: 1;
  height: 100%;
  background-color: var(--ov1_teamblue);
  border-radius: 8px;
  transition: all .5s cubic-bezier(.645, .045, .355, 1);
  display: block;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
}

.player_hp_bar_gradient {
  z-index: 3;
  height: 100%;
  background-image: linear-gradient(rgba(65, 126, 253, 0), rgba(65, 126, 253, .9) 31%, #417efd 54%);
  border-radius: 8px;
  transition: all .5s cubic-bezier(.645, .045, .355, 1);
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
}

.player_hp_bar_gradient.is-t {
  background-image: linear-gradient(rgba(255, 40, 92, 0), rgba(255, 40, 92, .9) 31%, #ff285c 54%);
}

.player_hp_bar_info {
  z-index: 4;
  width: 100%;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.player_stats_wrapper {
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>