import React from 'react';
import Icon from './icons';
export default ({ label, value, type }) => {
  const [clicked, setclicked] = React.useState(false);
  const [isHover, setisHover] = React.useState(false);
  const [valuemain, setvaluemain] = React.useState('');

  return (
    <div
      className='green-textbox'
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      style={{ borderColor: clicked || isHover == true ? '#6CA21F' : '' }}
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
          placeholder={value}
          value={valuemain}
          onChange={(e) => setvaluemain(e.target.value)}
          type={type}
        />
      </div>
    </div>
  );
};
