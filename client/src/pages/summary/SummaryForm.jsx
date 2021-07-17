import React, { useState } from 'react';

const SummaryForm = () => {
  const [isUnchecked, setIsUnchecked] = useState(true);

  const handleClick = () => {
    setIsUnchecked(!isUnchecked);
  };
  return (
    <div>
      <label htmlFor="checkbox">
        <input type="checkbox" onClick={handleClick} name="checkbox" id="checkbox" />
        I agree to Terms and conditions
      </label>
      <button type="button" disabled={isUnchecked}>Confirm order</button>
    </div>
  );
};

export default SummaryForm;
