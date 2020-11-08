import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1({
  parts,
  setParts,
}) {
  return(
    <>
      <div className="Main">
        <label
          className="Label"
        >
          Number of parts
        </label>
        <input
          className="Input"
          value={parts}
          onChange={e => setParts(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <Link to="/">
          <button
            className="Button Button-black"
          >
            Previous
          </button>
        </Link>
        <Link to="/page2">
          <button
            className={`Button ${parts === '' ? 'Button-disabled' : ''}`}
            disabled={parts === ''}
          >
            Next
          </button>
        </Link>
      </div>
    </>
  );
};