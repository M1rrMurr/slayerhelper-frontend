<script setup>
const props = defineProps({ item: Object })
const icon = new Image()
icon.src = `data:image/png;base64,${props.item.icon}`
</script>

<template>
  <img class="" :src="icon.src" alt="item.name">
</template>
