<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="name">朱子薇</div>
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
.name{
  color: aquamarine;
  position: fixed;
  left: 0;top: 0;
  font-size: 20px;
}
</style>
