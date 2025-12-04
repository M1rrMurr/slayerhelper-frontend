import api from "./api.js";

export const fetchItemApi = async function (id) {
  return await api.get(`/items/${id}`);
};
