<script setup>
import { getTest } from '@/utils/test';
import { useTestStore } from '@/stores/store.js'

const store = useTestStore()
getTest()

</script>


<template>
  <div class="about">
    Value is: {{ store.getStoreTest }}
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
