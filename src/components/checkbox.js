import React from 'react';
import Icon from '../components/icons';
export default ({ ischecked, title, isactive, onClick }) => {
  return (
    <div className='bar-item' onClick={onClick}>
      <Icon name={ischecked == true ? 'checked' : 'unchecked'} />
      <p className={isactive == true ? 'active' : ''}>{title}</p>
      <p className='px'>(XXs)</p>
    </div>
  );
};
