import React, { useState } from 'react';
import { addNewProductData } from '../api/api';
import { ErrorMessage } from './ErrorMessage';

const ProductData = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 12
  }
}

type Props = {
  onCreate: (product: IProduct) => void
}

export const CreateProductForm: React.FC<Props> = ({
  onCreate
}) => {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (inputText.trim().length === 0) {
      setError('Please add valid title');
      return;
    }

    ProductData.title = inputText;

    onCreate(await addNewProductData(ProductData))
  }

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
        value={inputText}
        onChange={onInputChangeHandler}
      />

      {error && (
        <ErrorMessage errorMessage={error} />
      )}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
};
