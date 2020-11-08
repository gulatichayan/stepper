import React from 'react';

import { APP_CONSTANTS } from '../../constants'

export default function Progress({
  currentPage
}) {

  const stepsArray = Array.from({length: APP_CONSTANTS.MAX_STEPS}, (_, i) => i + 1);

  return(
    <div className="Stepper" data-testid="stepper">
      {stepsArray.map(step => (
        <>
        <div className={`Step ${step > currentPage ? 'Faded': ''}`}>{step}</div>
        {step !== stepsArray.length &&
          <div className={`Line ${step >= currentPage ? 'Faded': ''}`}></div>
        }
        </>
      ))}
    </div>
  );
};