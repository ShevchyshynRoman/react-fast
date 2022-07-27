import React, {useState} from 'react';
import { Product } from './components/Product';
import { useProducts } from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProductForm} from "./components/CreateProductForm";

function App() {
  const { products, isProductsLoading, isProductsLoadingError } = useProducts();
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        <button
          type="button"
          className="py-2 px-4 border mb-2"
          onClick={() => setIsModalVisible(true)}
        >
          Add Product
        </button>

        {isProductsLoading && (
          <Loader />
        )}

        {isProductsLoadingError.length > 0 && (
          <ErrorMessage errorMessage={isProductsLoadingError} />
        )}

        {products.map((product: IProduct) => (
          <Product key={product.id} product={product}/>
        ))}

        {isModalVisible && (
          <Modal title="Create new product">
            <CreateProductForm setIsModalVisible={setIsModalVisible} />
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
