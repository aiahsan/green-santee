import React from 'react';
import Icon from './icons';
import { useHistory } from 'react-router-dom';
export default ({ setshownav, variant }) => {
  const history = useHistory();
  return (
    <div className='navcst'>
      <div className='navcst-inner'>
        <div className='d-flex justify-content-between '>
          <div onClick={() => history.push('/')} className='logo'>
            <Icon name='logo' />
          </div>
          <div className='nav-btn-flex sidebar-hide'>
            <button className='btn secondry-btn'>Se connecter</button>
            <button className='btn primary-btn'>Nous contacter</button>
          </div>

          <span className='nav-toggle' onClick={() => setshownav(true)}>
            &#9776;
          </span>
        </div>
      </div>
    </div>
  );
};
