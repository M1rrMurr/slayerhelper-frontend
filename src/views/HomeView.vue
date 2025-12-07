<script setup>
import { computed } from 'vue';
import useItemStore from '@/stores/item';
import useInventoryStore from '@/stores/inventory';
import ItemView from '@/components/ItemView.vue';

const inventoryStore = useInventoryStore();
const itemStore = useItemStore();
const items = computed(() => itemStore.items.slice(28));


const onDragItem = function (event, item, source, slot = 0) {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', item.id)
  event.dataTransfer.setData('source', source)
  event.dataTransfer.setData('startSlot', slot)
}
const onDropItem = function (event, slot) {
  const id = Number(event.dataTransfer.getData('itemId'))
  const source = event.dataTransfer.getData('source')
  const startSlot = Number(event.dataTransfer.getData('startSlot'))

  const item = source !== 'inventory' ? items.value.find((item) => item.id === id) : inventoryStore.inventory.find(item => item.slot === startSlot)
  inventoryStore.addToInventory(item, slot)
}



</script>

<template>
  <h1>You did it!</h1>

  <div class="flex gap-3">
    <button @click="itemStore.fetchItemByName">item by name</button>
    <button @click="itemStore.fetchAllItem()">fetch all item</button>
  </div>

  <div
    class="bg-[url(@/assets/Inventory_tab.png)] bg-cover bg-center h-64 w-48 grid grid-cols-4 grid-rows-7 pt-2 pl-4 ">
    <!-- inventory slots -->
    <div @drop="e => onDropItem(e, i)" @dragover.prevent @dragenter.prevent v-for="i in 28" :key="i">

      <ItemView @dragstart="e => onDragItem(e, item, 'inventory', i)" v-for="item in inventoryStore.getItemBySlot(i)"
        :item="item" />
    </div>

  </div>
  <div v-if="items.length" class="flex gap-2">
    <ItemView draggable="true" @dragstart="e => onDragItem(e, item, 'items')" v-for="item in items" :key="item.id"
      :item="item">
    </ItemView>
  </div>

</template>
