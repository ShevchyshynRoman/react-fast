import React from 'react';

type Props = {
  errorMessage: string,
}

export const ErrorMessage: React.FC<Props> = ({
  errorMessage,
}) => {
  return (
    <p
      className="text-center text-red-400"
    >
      {errorMessage}
    </p>
  );
};
