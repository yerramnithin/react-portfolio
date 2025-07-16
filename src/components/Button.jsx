import React, { useState } from "react";

const Button = () => {
  const [name, setName] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleBlueClick = () => {
    if (clickCount === 4) {
      setClickCount(-2);
      setMessage(`${name}, you have sharp eyes 😁`);
    } else {
      setClickCount(clickCount + 1);
    }
  };

  const handleYellowClick = () => {
    setClickCount(-1);
    setMessage(`Oopsies! ${name} clicked the yellow button`);
  };

  const handleReset = () => {
    setClickCount(0);
    setMessage("");
  };

  const primaryBtnClass =
    clickCount >= 0 && clickCount < 4
      ? "btn-primary"
      : clickCount === 4
      ? "btn-warning"
      : "btn-danger";

  const primaryBtnLabel =
    clickCount >= 0 && clickCount < 4
      ? "Blue Button"
      : clickCount === 4
      ? "Yellow Button"
      : "Reset";

  const handlePrimaryClick =
    clickCount >= 0 && clickCount < 4
      ? handleBlueClick
      : clickCount === 4
      ? handleYellowClick
      : handleReset;

  const secondaryBtnClass = clickCount === 4 ? "btn-primary" : "btn-danger";
  const secondaryBtnLabel = clickCount === 4 ? "Blue Button" : "Reset";
  const handleSecondaryClick = clickCount === 4 ? handleBlueClick : handleReset;

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control my-2 w-75 mx-auto text-center"
      />
      <p className="display-6 text-center">
        Click the blue button 5 times to unlock a secret message.
      </p>
      <div className="lead d-flex justify-content-center gap-2">
        <button
          className={`btn btn-sm ${primaryBtnClass}`}
          onClick={handlePrimaryClick}
        >
          {primaryBtnLabel}
        </button>
        <button
          className={`btn btn-sm ${secondaryBtnClass}`}
          onClick={handleSecondaryClick}
        >
          {secondaryBtnLabel}
        </button>
      </div>
      <p className="fw-bold text-center mt-3">
        {clickCount < 0 ? message : `Clicks: ${clickCount}`}
      </p>
    </>
  );
};

export default Button;
