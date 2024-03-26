<template>
    <div data-hudid="player_current_hp_bar" class="player_center_hp_bar"></div>
</template>

<style>

.player_center_hp_bar {
    z-index: 1;
    width: 100%;
    height: 40px;
    background-color: var(--ov1_teamblue);
    border-radius: 8px;
    transition: all .25s cubic-bezier(.785, .135, .15, .86);
    position: absolute;
    top: -4px;
    bottom: auto;
    left: 0%;
    right: 0%;
  }
  
  .player_center_hp_bar.is-t {
    background-color: var(--ov1_teamred);
  }

</style>