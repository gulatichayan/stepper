import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Page2({
  parts
}) {
  const [partPercent, setPercent] = useState([]);
  const [partPercentSubmit, setSubmit] = useState(true);
  const partsArr = Array.from({length: parts}, (_, i) => i + 1);

  const handlePartPercentInputChange = (index, value) => {
    let items = [...partPercent];
    items[index - 1] = value;
    setPercent(items);
    const sum = items.reduce((a, b) => Number(a) + Number(b), 0);
    if(sum === 100) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };

  return(
    <>
      <div className="Main">
        {partsArr.map((part) => (
          <div className="Input-wrapper">
            <label
              className="Label"
            >
              Part {part} %
            </label>
            <input
              className="Input"
              value={partPercent[part - 1]}
              onChange={(e) => handlePartPercentInputChange(part, e.target.value)}
              type="number"
            />
          </div>
        ))}
      </div>
      <div>
        <Link to="/page1">
          <button
            className="Button Button-black"
          >
            Previous
          </button>
        </Link>
        <Link to="/success">
          <button
            className={`Button ${partPercentSubmit ? 'Button-disabled' : ''}`}
            disabled={partPercentSubmit}
          >
            Next
          </button>
        </Link>
      </div>
    </>
  )
}