import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState(0);
  const [parts, setParts] = useState('');
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

  const handleNumberOfPartsClicked = () => {
    const partPercentArr = Array.from({length: parts}, (_, i) => '');
    setPercent(partPercentArr);
    setPage(2);
  };

  const handlePartPercentSubmit = () => {
    setParts('');
    setPercent([]);
    setSubmit(true);
    setPage(3);
  };

  return (
    <div className="App">
      {page === 0 &&
        <button
          className="Button"
          onClick={() => setPage(1)}
        >
          New Request
        </button>
      }
      {page === 1 &&
        <>
          <div className="Stepper">
            <div className="Step">1</div>
            <div className="Line Faded"></div>
            <div className="Step Faded">2</div>
            <div className="Line Faded"></div>
            <div className="Step Faded">3</div>
          </div>
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
            <button
              className="Button Button-black"
              onClick={() => setPage(0)}
            >
              Previous
            </button>
            <button
              className={`Button ${parts === '' ? 'Button-disabled' : ''}`}
              onClick={handleNumberOfPartsClicked}
              disabled={parts === ''}
            >
              Next
            </button>
          </div>
        </>
      }
      {page === 2 &&
        <>
          <div className="Stepper">
            <div className="Step">1</div>
            <div className="Line"></div>
            <div className="Step">2</div>
            <div className="Line Faded"></div>
            <div className="Step Faded">3</div>
          </div>
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
            <button
              className="Button Button-black"
              onClick={() => setPage(1)}
            >
              Previous
            </button>
            <button
              className={`Button ${partPercentSubmit ? 'Button-disabled' : ''}`}
              onClick={handlePartPercentSubmit}
              disabled={partPercentSubmit}
            >
              Next
            </button>
          </div>
        </>
      }
      {page === 3 &&
        <>
          <div className="Stepper">
            <div className="Step">1</div>
            <div className="Line"></div>
            <div className="Step">2</div>
            <div className="Line"></div>
            <div className="Step">3</div>
          </div>
          <div className="Main">
            <span
              className="success"
            >
              Success!
            </span>
          </div>
          <div>
            <button
              className="Button Button-black"
              onClick={() => setPage(0)}
            >
              Home
            </button>
          </div>
        </>
      }
    </div>
  );
}

export default App;
