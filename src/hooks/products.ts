import { useEffect, useState } from 'react';
import { getProductsData } from '../api/api';
import { AxiosError } from 'axios';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isProductsLoadingError, setIsProductsLoadingError] = useState('');

  useEffect(() => {
    async function response() {
      try {
        setIsProductsLoadingError('');
        setIsProductsLoading(true);
        const productDataFromServer = await getProductsData();

        setProducts(productDataFromServer);
        setIsProductsLoading(false);
      } catch (e: unknown) {
        setIsProductsLoading(false);

        const error = e as AxiosError;
        setIsProductsLoadingError(error.message);
      }
    }

    response();
  }, []);

  return { products, isProductsLoading, isProductsLoadingError }
}
