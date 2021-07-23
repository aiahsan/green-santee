import React from 'react';
import Icon from './icons';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);

  return (
    <div
      className='green-textbox'
      style={{ borderColor: clicked == true ? '#6CA21F' : '' }}
    >
      <label>{label}</label>
      <div className='d-flex'>
        <div className='mt-1 cms'>
          <Icon name='flag' />
        </div>
        <input
          onBlur={() => setclicked(false)}
          onClick={() => setclicked(true)}
          className='form-control'
          value={value}
          type={type}
        />
      </div>
    </div>
  );
};
