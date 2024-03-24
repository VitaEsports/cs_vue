<script setup>
import { tester } from '@/util/overlay1/index'
let json;

var io = io();
const CLIENT_TOKEN = "Letronik"

io.on("update", function(status) {
    json = JSON.parse(status);
    if(CLIENT_TOKEN === '' || getToken(json) === CLIENT_TOKEN) {
      tester(json)
    }
});

function getToken(json) {
    return json["auth"]["token"];
}
</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
