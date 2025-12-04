<template>
  <Banner variant="info" v-bind="$attrs">
    <slot></slot>
  </Banner>
</template>

<script setup lang="ts">
import Banner from './Banner.vue'
</script>

