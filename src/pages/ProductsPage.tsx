import React, { useContext } from 'react';
import { useProducts } from '../hooks/products';
import { ModalContext } from '../context/ModalContext';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { CreateProductForm } from '../components/CreateProductForm';

export const ProductsPage = () => {
  const { products, addProduct, isProductsLoading, isProductsLoadingError } = useProducts();
  const { isModalVisible, openModal, closeModal } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  }

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        <button
          type="button"
          className="py-2 px-4 border mb-2"
          onClick={() => openModal()}
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
          <Modal
            title="Create new product"
          >
            <CreateProductForm onCreate={createHandler} />
          </Modal>
        )}
      </div>
    </>
  );
};
