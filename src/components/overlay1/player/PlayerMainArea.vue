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
        <div data-hudid="player_0_total_kills" class="poppins_extrabold_12">00</div>
      </div>
      <PlayerDeaths />
      <PlayerMoney />
    </div>
  </div>
</template>

<style>

</style>