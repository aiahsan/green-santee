import React from 'react';
import Checkbox from './checkbox';
import Icon from './icons';

const InnerBox = ({ stepcount }) => {
  return (
    <div>
      <Checkbox
        title='Entreprise à assurer'
        ischecked={stepcount >= 2 ? true : false}
        isactive={stepcount == 1 ? true : false}
      />
      <Checkbox
        title='Correspondant de l’entreprise'
        ischecked={stepcount >= 3 ? true : false}
        isactive={stepcount == 2 ? true : false}
      />
      <Checkbox
        title='La santé'
        ischecked={stepcount >= 4 ? true : false}
        isactive={stepcount == 3 ? true : false}
      />
      <Checkbox
        title='Les conditions'
        ischecked={stepcount >= 5 ? true : false}
        isactive={stepcount == 4 ? true : false}
      />
      <Checkbox
        title='Mandat de prélèvement SEPA'
        ischecked={stepcount >= 6 ? true : false}
        isactive={stepcount == 5 ? true : false}
      />
      <div className='d-flex'>
        <img className='mrt-15' src='/images/ap.png' />
      </div>
    </div>
  );
};
export default ({ stepcount, setshownav, shownav, variant }) => {
  return shownav == true ? (
    <div className='overlay'>
      <div className='sidebar sidebar-overlay'>
        <div
          className='d-flex justify-content-end mb-3'
          onClick={() => setshownav(false)}
        >
          <Icon name='cross' />
        </div>
        <div className='nav-btn-flex mb-3'>
          <button className='btn secondry-btn'>Se connecter</button>
          <button className='btn primary-btn'>Nous contacter</button>
        </div>
        <div>
          {variant && true ? <></> : <InnerBox stepcount={stepcount} />}
        </div>
      </div>
    </div>
  ) : variant && true ? (
    <></>
  ) : (
    <div className='sidebar sidebar-hide'>
      <div>
        <InnerBox stepcount={stepcount} />
      </div>
    </div>
  );
};
