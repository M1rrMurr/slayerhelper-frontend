import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchItemApi } from "../api/ItemApiCall.js";

const useItemStore = defineStore("istemStore", () => {
  const loading = ref(false);
  const items = ref([]);
  const item = ref(null);

  const fetchItem = async function (id) {
    loading.value = true;
    try {
      const res = await fetchItemApi(id);
      item.value = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const fetchItems = async function () {};
  return { items, item, loading, fetchItems, fetchItem };
});

export default useItemStore;
