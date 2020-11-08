import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return(
    <Link to='/page1'>
      <button
        className="Button"
      >
        New Request
      </button>
    </Link>
  );
};