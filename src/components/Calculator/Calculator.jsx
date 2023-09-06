import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <input type="text" readOnly />
      <div className="buttons">
  <img src="src/assets/calculatorsheepbtn1 copy.png" alt="1" onClick={() => handleButtonClick(1)} />
  {/* ... add more sheep images/buttons */}
</div>
    </div>
  );
}

export default Calculator;
