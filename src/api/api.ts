import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';

export const getProductsData = async () => {
  const response = await axios.get(`${BASE_URL}products`)

  return response.data;
}

export const addNewProductData = async (productData: IProduct) => {
  const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);

  return response.data;
}
