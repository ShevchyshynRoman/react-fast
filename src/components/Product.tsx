import React, { useState } from 'react';

type Props = {
  product: IProduct
}

export const Product: React.FC<Props> = ({
  product
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const btnBgClassName = showDetails ? "bg-blue-300" : "bg-yellow-400"

  return (
    <div
      className="border py-2 px-4 rounded flex flex flex-col items-center mb-2"
    >
      <img
        className="w-1/6"
        src={product.image}
        alt="Product image"
      />

      <p>
        {product.title}
      </p>

      <p
        className="font-bold"
      >
        {product.price}
      </p>

      <button
        className={`
          ${btnBgClassName} py-2 px-4 border
        `}
        onClick={
          () => setShowDetails(prevState => !prevState)
        }
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>


      {showDetails && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:
            {' '}
            <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
