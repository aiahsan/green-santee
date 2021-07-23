import React from 'react';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);

  return (
    <div
      className='green-textbox'
      style={{ borderColor: clicked == true ? '#6CA21F' : '' }}
    >
      <label>{label}</label>
      <select
        value={value}
        onBlur={() => setclicked(false)}
        onClick={() => setclicked(true)}
      >
        <option>{value}</option>
      </select>
    </div>
  );
};
