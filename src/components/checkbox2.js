import React from 'react';
import Icon from './icons';
export default ({ checked, title, isactive, setchecked }) => {
  // const [checked,setchecked]=React.useState(false);
  return (
    <div
      className='bar-item d-flex align-items-center mt-5'
      onClick={() => setchecked(!checked)}
    >
      <Icon name={checked == true ? 'check2' : 'unchecked2'} />
      <p className={isactive == true ? 'active ml-2' : 'ml-2'}>{title}</p>
    </div>
  );
};
