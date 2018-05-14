import React from 'react';

const Decision = ({ handleDecision, hasOptions }) => {
  return (
    <section className="decision">
      <button type="button" onClick={handleDecision} disabled={!hasOptions}>
        What should I do next?
      </button>
    </section>
  );
};

export default Decision;
