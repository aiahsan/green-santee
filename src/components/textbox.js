import React from 'react';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);
  const [valuemain, setvaluemain] = React.useState(value);
  return (
    <div
      className='green-textbox'
      style={{ borderColor: clicked == true ? '#6CA21F' : '' }}
    >
      <label>{label}</label>
      <input
        onBlur={() => setclicked(false)}
        onClick={() => setclicked(true)}
        className='form-control'
        value={valuemain}
        onChange={(e) => setvaluemain(e.target.value)}
        type={type}
      />
    </div>
  );
};
