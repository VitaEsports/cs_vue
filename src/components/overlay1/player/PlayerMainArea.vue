<script setup>
import PlayerImage from "@/components/overlay1/player/PlayerImage";
import PlayerHPandArmor from "@/components/overlay1/player/PlayerHPandArmor";
import PlayerName from "@/components/overlay1/player/PlayerName";
import PlayerKills from "@/components/overlay1/player/PlayerKills";
import PlayerDeaths from "@/components/overlay1/player/PlayerDeaths";
import PlayerMoney from "@/components/overlay1/player/PlayerMoney";

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

<style></style>