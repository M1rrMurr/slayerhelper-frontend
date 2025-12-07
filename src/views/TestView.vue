<script setup>
import { ref } from 'vue';

const data = ref([{ id: 1, title: "A item", list: 1 }, { id: 2, title: "B item", list: 1 }, { id: 3, title: "C item", list: 2 }])
const getList = function (listNumber) {
  return data.value.filter((item) => item.list === listNumber)
}

const onDragItem = function (event, item) {
  console.log(event)
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.setData('itemId', item.id)
}

const onDropItem = function (event, list) {
  const id = event.dataTransfer.getData('itemId');
  console.log(id)
  const item = data.value.find((item) => item.id == id)

  item.list = list

}
</script>

<template>
  <div @drop="e => onDropItem(e, 1)" @dragover.prevent @dragenter.prevent
    class="py-2 px-3 bg-amber-900 w-3/12 min-h-16 flex-col space-y-2">
    <div @dragstart="(e) => onDragItem(e, item)" class="bg-purple-500 py-2 px-3 border-yellow-200 border text-center"
      draggable="true" v-for="item in getList(1)" :key="item.id">
      {{
        item.title }}
    </div>
  </div>
  <div @drop="e => onDropItem(e, 2)" @dragover.prevent @dragenter.prevent
    class="py-2 px-3 bg-yellow-800 w-3/12 min-h-16 mt-10 flex-col space-y-2">

    <div @dragstart="(e) => onDragItem(e, item)" class="bg-purple-500 py-2 px-3 border-yellow-200 border text-center"
      draggable="true" v-for="item in getList(2)" :key="item.id">{{
        item.title }}</div>
  </div>
</template>
