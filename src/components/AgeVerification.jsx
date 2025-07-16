import React, { useState } from "react";

function AgeVerification() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [resultMessage, setResultMessage] = useState(null);

  const handleVerification = () => {
    const ageNum = Number(age.trim());

    if (!name.trim() || !age.trim()) {
      setResultMessage(null);
      return;
    }

    const isEligible = ageNum >= 18;
    const message = isEligible
      ? `${name}, you are eligible to vote.`
      : `${name}, you are not eligible to vote.`;

    const alertClass = isEligible ? "alert-success" : "alert-danger";
    setResultMessage(<div className={`alert ${alertClass}`}>{message}</div>);
  };

  return (
    <div className="p-3 border rounded shadow-sm bg-light w-90 mx-auto mt-3">
      <h4 className="text-center mb-3">Age Verification</h4>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />

      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="form-control mb-2"
      />

      <div className="d-grid gap-2">
        <button
          className="btn btn-warning btn-sm w-50 mx-auto"
          onClick={handleVerification}
        >
          Verify Age
        </button>
      </div>

      {resultMessage && <div className="mt-3">{resultMessage}</div>}
    </div>
  );
}

export default AgeVerification;
