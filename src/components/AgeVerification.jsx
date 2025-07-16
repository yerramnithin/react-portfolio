import React, { useState } from "react";

function AgeVerification() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [resultMessage, setResultMessage] = useState(null);

  const handleVerification = () => {
    const ageNum = Number(age.trim());

    // Basic validation
    if (!name.trim() || !age.trim()) {
      setResultMessage(null);
      return;
    }

    // Invalid or negative input handling
    if (isNaN(ageNum) || ageNum < 0) {
      setResultMessage(
        <div className="alert alert-danger">
          Please enter a valid non-negative age.
        </div>
      );
      return;
    }

    const isEligible = ageNum >= 18;
    const alertClass = isEligible ? "alert-success" : "alert-danger";
    const message = `${name}, you ${
      isEligible ? "are" : "are not"
    } eligible to vote.`;

    setResultMessage(<div className={`alert ${alertClass}`}>{message}</div>);
  };

  return (
    <div className="container mt-3">
      <p className="display-6 text-center">Age Verification</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control my-2"
      />

      <input
        type="number"
        min="0"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="form-control my-2"
      />

      <div className="d-flex justify-content-center">
        <button className="btn btn-warning btn-sm" onClick={handleVerification}>
          Check
        </button>
      </div>

      <div className="mt-3">{resultMessage}</div>
    </div>
  );
}

export default AgeVerification;
