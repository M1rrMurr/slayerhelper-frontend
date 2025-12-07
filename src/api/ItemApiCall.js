import api from "./api.js";

export const itemApiCall = async function (id) {
  return await api.get(`/items/${id}`);
};

export const allItemApiCall = async function () {
  return await api.get("/items");
};

export const findItemByNameCall = async function (name) {
  return await api.get("/findbyname", { params: { name: name } });
};
