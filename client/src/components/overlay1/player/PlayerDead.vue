<script setup>
import PlayerName from './PlayerName.vue'
import PlayerKills from './PlayerKills.vue'
import PlayerDeaths from './PlayerDeaths.vue'
import PlayerMoney from './PlayerMoney.vue'
import PlayerRoundDamage from './PlayerRoundDamage.vue'

</script>

<template>
    <div data-hudid="player_0_dead" class="player_dead_wrapper">
        <div class="player_dead_info_wrapper">
          <PlayerName />
          <div class="player_dead_stats_wrapper">
            <PlayerKills />
            <PlayerDeaths />
          </div>
          <PlayerMoney />
          <PlayerRoundDamage />
        </div>
      </div>
</template>

<style>

.player_dead_wrapper {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    display: none;
  }

  .player_dead_info_wrapper {
    width: 135px;
    height: 100px;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    background-image: linear-gradient(rgba(13, 13, 13, .1), rgba(13, 13, 13, .95) 80%);
    border-radius: 8px;
    flex-flow: column;
    justify-content: space-between;
    padding: 4px;
    display: flex;
  }

  .player_dead_stats_wrapper {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: column;
    display: flex;
  }

</style>