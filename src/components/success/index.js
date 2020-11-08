import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return(
    <>
      <div className="Main">
        <span
          className="success"
        >
          Success!
        </span>
      </div>
      <div>
        <Link to="/">
          <button
            className="Button Button-black"
          >
            Home
          </button>
        </Link>
      </div>
    </>
  )
};