
<template>
    <div class="hud_center_lower_info_timer_placeholder">
        <div data-hudid="team_1_bomb_time_event" class="hud_center_lower_info_timer_holder">
          <div class="hud_center_lower_info_left_timer_wrapper">
            <div class="hud_center_lower_info_timer_icon_wrapper">
              <div data-hudid="team_1_bomb_time_event_icon" class="hud_center_lower_info_timer_icon"><svg width="100%" height="100%" viewbox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.35822 0.0535278C2.30562 0.138749 2.57673 0.532014 3.67131 1.95818C4.53615 3.08493 4.59819 3.14816 4.86099 3.17C5.01352 3.18271 5.13827 3.2284 5.13827 3.2715C5.13827 3.43874 4.60176 4.07571 4.46089 4.07571C4.31459 4.07571 4.29163 4.04027 4.21845 3.70221C4.18278 3.53712 4.0321 3.45806 2.96777 3.04592C0.658554 2.15181 0.685376 2.15991 0.564863 2.32359C0.483729 2.43377 0.479716 2.48994 0.54718 2.57115C0.595103 2.62896 1.32695 3.24096 2.17351 3.9312C3.48326 4.99917 3.79814 5.22014 4.28636 5.41406C5.14912 5.7568 5.23523 5.81416 5.58875 6.28165C6.49675 7.48217 6.52997 7.5778 6.73169 9.56916C6.79202 10.1643 6.89418 10.8269 6.95867 11.0417C7.33225 12.2846 8.09225 13.5795 8.93718 14.4128C9.52073 14.9883 10.3632 15.6433 10.829 15.8837C11.1008 16.024 11.1581 16.0301 11.37 15.941C11.6721 15.8139 11.9156 15.3751 11.885 15.0129C11.8652 14.7794 11.7965 14.6953 11.3422 14.3481C10.5721 13.7594 10.078 13.2482 9.63626 12.583C8.95851 11.5622 8.65121 10.7147 8.44629 9.30072C8.38009 8.844 8.29412 8.35942 8.25519 8.2239C8.21633 8.08831 8.18453 7.91348 8.18453 7.83539C8.18453 7.6989 8.19025 7.69853 8.33038 7.82529C8.47036 7.95197 8.70463 7.93934 8.70463 7.80515C8.70463 7.76971 8.54436 7.6116 8.34851 7.45379C8.04455 7.2089 7.27429 6.20809 7.20416 5.96684C7.19167 5.92405 7.27132 5.78191 7.38114 5.65092L7.5807 5.41287L8.12413 5.60902C8.6307 5.79187 8.72283 5.8019 9.48477 5.75717C9.93428 5.73072 10.6197 5.65947 11.0079 5.59877C13.086 5.27386 14.5478 5.61452 16.7725 6.94202C17.5424 7.40141 17.8568 7.45409 18.1782 7.17755C18.4616 6.93385 18.5115 6.47081 18.2775 6.25735C17.9704 5.97725 16.4902 4.99687 15.8002 4.61661C14.7232 4.02318 14.1886 3.91485 12.3486 3.91723C11.5016 3.91827 10.3255 3.95527 9.73501 3.9994C8.69259 4.0772 8.64013 4.07407 7.93518 3.89085C6.79596 3.59485 6.77798 3.58311 6.18009 2.74576C5.88542 2.33302 5.61453 1.99533 5.57805 1.99533C5.54157 1.99533 4.86819 1.54397 4.08166 0.992297C2.7393 0.0507044 2.45555 -0.103838 2.35822 0.0535278ZM8.75374 6.18878C8.69266 6.348 8.97084 6.45328 9.45245 6.45328C10.0761 6.45328 9.86236 6.22741 9.13564 6.11841C8.86378 6.07762 8.79126 6.091 8.75374 6.18878ZM8.42066 6.65292C8.45372 6.82433 9.44762 7.08809 9.44762 6.92538C9.44762 6.80167 8.85085 6.52758 8.58159 6.52758C8.448 6.52758 8.40327 6.56243 8.42066 6.65292ZM8.11023 6.95599C8.11023 7.04009 8.89305 7.49347 9.03823 7.49347C9.25489 7.49347 9.11632 7.315 8.73672 7.10511C8.37756 6.90658 8.11023 6.84298 8.11023 6.95599Z" fill="white"></path>
                </svg></div>
            </div>
            <div data-hudid="team_1_bomb_time_bar_event" class="hud_center_lower_info_left_bar"></div>
          </div>
        </div>
      </div>
</template>

<style>

.hud_center_lower_info_timer_placeholder {
    width: 100%;
    height: 100%;
    max-width: 194px;
    min-width: 194px;
  }

  .hud_center_lower_info_timer_holder {
    width: 100%;
    height: 100%;
    max-width: 194px;
    display: none;
  }

  .hud_center_lower_info_left_timer_wrapper {
    width: 100%;
    height: 100%;
    max-width: 194px;
    background-color: var(--vita-v1-overlay-background);
    border-radius: 8px;
    justify-content: flex-end;
    align-items: center;
    padding-right: 8px;
    display: flex;
    position: relative;
  }

  .hud_center_lower_info_timer_icon_wrapper {
    z-index: 2;
    position: relative;
  }

  .hud_center_lower_info_timer_icon {
    height: 16px;
  }

  .hud_center_lower_info_left_bar {
    z-index: 1;
    width: 80%;
    height: 100%;
    background-color: var(--ov1_teamblue);
    border-radius: 8px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%;
  }
  
  .hud_center_lower_info_left_bar.is-t {
    background-color: var(--ov1_teamred);
  }

</style>