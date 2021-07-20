import React from 'react';
export default ({ label, value, type }) => {
  return (
    <div className='green-textbox'>
      <label>{label}</label>
      <input className='form-control' value={value} type={type} />
    </div>
  );
};
