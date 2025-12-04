<script setup>
import { watch } from 'vue';
import useItemStore from './stores/item';

const itemStore = useItemStore()
const icon = new Image();
watch(() => itemStore.item, () => icon.src = `data:image/png;base64,${itemStore.item.icon}`
)
</script>

<template>
  <div class="bg-gray-800 text-slate-200">
    <div class="min-h-screen w-7xl  mx-auto">
      <h1>You did it!</h1>
      <button @click="itemStore.fetchItem(2)">fetch item</button>
      <img v-if="itemStore.item" :src="icon.src" alt="">

    </div>
  </div>
</template>
