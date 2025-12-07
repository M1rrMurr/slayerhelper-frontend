import { defineStore } from "pinia";
import { ref } from "vue";
import {
  itemApiCall,
  allItemApiCall,
  findItemByNameCall,
} from "../api/ItemApiCall.js";

const useItemStore = defineStore("istemStore", () => {
  const loading = ref(false);
  const items = ref([]);
  const item = ref(null);
  const errors = ref("");

  const fetchItem = async function (id) {
    loading.value = true;
    try {
      const res = await itemApiCall(id);
      item.value = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  //fetch all items
  const fetchAllItem = async function () {
    loading.value = true;
    console.log("test");
    try {
      const res = await allItemApiCall();
      console.log(res.data);
      items.value = res.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const fetchItemByName = async function (name) {
    try {
      const res = await findItemByNameCall(name);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {
    items,
    item,
    errors,
    loading,
    fetchItemByName,
    fetchAllItem,
    fetchItem,
  };
});

export default useItemStore;
