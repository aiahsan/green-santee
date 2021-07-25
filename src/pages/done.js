import React from 'react';
import Icon from '../components/icons';
import Nav from '../components/navbar';
import { useHistory } from 'react-router-dom';
import SideBar from '../components/sidebar';

export default () => {
  const history = useHistory();
  const [shownav, setshownav] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='step-done'>
      <Nav shownav={shownav} setshownav={setshownav} variant={true} />
      <SideBar
        variant={true}
        shownav={shownav}
        setshownav={setshownav}
        stepcount={0}
      />

      <div className='done-inner '>
        <div className='d-flex flex-column align-items-center mb-40'>
          <Icon name='trophy' />
          <h2>Félicitation !</h2>
        </div>

        <p>Vous venez de finaliser votre demande d’adhésion !</p>
        <p className='m-0'>
          Nous vous remercions de la confiance que vous nous accordez en nous
          confiant cette étude.
        </p>
        <p className='done-innertext-cst'>
          Nous vous ferons un retour sous 72 heures pour vous annoncer si votre
          demande a été accordé ou non. Une fois la demande obtenu, les
          informations vous seront envoyé sur l’adresse mail de l’assuré.
        </p>
        <p>Nous restons à tout moment disponibles !</p>

        <h4
          onClick={() => history.replace('/')}
          style={{ cursor: 'pointer' }}
          className='mt-40 mb-80'
        >
          Retourner sur Green Santé
        </h4>
      </div>
    </div>
  );
};
