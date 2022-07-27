import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string
}

export const Modal: React.FC<Props> = ({
  children,
  title,
}) => {
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" />
      <div
        className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
      >
        <h2 className="text-2xl mb-2">
          {title}
        </h2>

        {children}
      </div>
    </>
  );
};
