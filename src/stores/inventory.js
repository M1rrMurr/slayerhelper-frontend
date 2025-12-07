import { defineStore } from "pinia";
import { ref } from "vue";

const useInventoryStore = defineStore("inventory", function () {
  const inventory = ref([]);

  const addToInventory = function (item, slot) {
    const itemInInventory = item.slot;
    console.log(itemInInventory);
    if (!itemInInventory) {
      const newItem = { ...item, slot };

      inventory.value.push(newItem);
    }
    if (itemInInventory) {
      item.slot = slot;
    }
    //todo: if the slot has already an item...
  };

  const getItemBySlot = function (slot) {
    const item = inventory.value.filter((item) => item.slot === slot);
    console.log(typeof item);
    return item;
  };

  const getItem = function (item) {
    return inventory.value.includes(item);
  };

  return { inventory, addToInventory, getItemBySlot };
});

export default useInventoryStore;
