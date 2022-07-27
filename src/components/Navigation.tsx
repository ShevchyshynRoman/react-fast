import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
      <h2>React 2022</h2>

      <div>
        <Link to="/" className="mr-2">Products</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
