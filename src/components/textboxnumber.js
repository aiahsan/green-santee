import React from 'react';
import Icon from './icons';
export default ({ label, value, type }) => {
  return (
    <div className='green-textbox'>
      <label>{label}</label>
      <div className='d-flex'>
        <div className='mt-1 cms'>
          <Icon name='flag' />
        </div>
        <input className='form-control' value={value} type={type} />
      </div>
    </div>
  );
};
