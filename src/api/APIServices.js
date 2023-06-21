import axios from "axios";

import { URL } from "./Url";

const getProducts = async () => {
  const { data } = await axios.get(`${URL}/geeks`);
  return data;
};

const getProduct = async (id) => {
  const { data } = await axios.get(`${URL}/geeks/${id}`);

  return data;
};

const getCategories = async () => {
  const { data } = await axios.get(`${URL}/categories`);
  return data;
};

const getByCategory = async (id) => {
  const { data } = await axios.get(`${URL}/geeks/category/${id}`);
  return data;
};

export { getProducts, getProduct, getCategories, getByCategory };
