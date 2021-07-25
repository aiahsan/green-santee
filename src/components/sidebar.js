import React from 'react';
import Checkbox from './checkbox';
import Icon from './icons';

const InnerBox = ({
  stepcount,
  handlePageChange,
  activepage,
  completedPage,
}) => {
  return (
    <div>
      <Checkbox
        title='Entreprise à assurer'
        ischecked={completedPage.includes(1) ? true : false}
        isactive={activepage == 1 ? true : false}
        onClick={() => handlePageChange(1)}
      />
      <Checkbox
        title='Correspondant de l’entreprise'
        ischecked={completedPage.includes(2) ? true : false}
        isactive={activepage == 2 ? true : false}
        onClick={() => handlePageChange(2)}
      />
      <Checkbox
        title='La santé'
        ischecked={completedPage.includes(3) ? true : false}
        isactive={activepage == 3 ? true : false}
        onClick={() => handlePageChange(3)}
      />
      <Checkbox
        title='Les conditions'
        ischecked={completedPage.includes(4) ? true : false}
        isactive={activepage == 4 ? true : false}
        onClick={() => handlePageChange(4)}
      />
      <Checkbox
        title='Mandat de prélèvement SEPA'
        ischecked={completedPage.includes(5) ? true : false}
        isactive={activepage == 5 ? true : false}
        onClick={() => handlePageChange(5)}
      />
      <div className='d-flex'>
        <img className='mrt-15' src='/images/ap.png' />
      </div>
    </div>
  );
};
export default ({
  stepcount,
  setshownav,
  shownav,
  variant,
  handlePageChange,
  activepage,
  completedPage,
}) => {
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
        <InnerBox
          handlePageChange={handlePageChange}
          activepage={activepage}
          stepcount={stepcount}
          completedPage={completedPage}
        />
      </div>
    </div>
  );
};
