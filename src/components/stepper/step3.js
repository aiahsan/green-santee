import React from 'react';
import Textbox from '../textbox';
import Radio from '../radio';
import Select from '../select';
import Icon from '../icons';
export default ({ handleStep }) => {
  const handleRadio = (i) => {
    const newR = radios.map((x) => false);
    newR[i] = true;
    setradios([...newR]);
  };

  const [radios, setradios] = React.useState([false, false, false, false]);
  return (
    <div className='stepper'>
      <h1>La santé</h1>
      <p className='mt-3'>
        La date d’effet du contrat ne peut pas être antérieur au mois de
        réalisation du devis.
      </p>
      <div className='flex-broke mt-4'>
        <div className='text-postal2 mr-4 '>
          <Textbox label='' value='Monsieur' type='date' />
        </div>
      </div>
      <div className='mt-15p'>
        <h3>Votre niveau de couverture</h3>
        <p className='step-3p'>
          Vous avez choisi de couvrir vos salariés et leur famille Cocher la
          structure de cotisation voulu :
        </p>
        <div className='d-flex mt-5 no-break'>
          <div className='text-postal2 mr-4'>
            <Radio
              onClick={() => handleRadio(0)}
              ischecked={radios[0] == true ? true : false}
              label=''
              value='Isolé* / Famille'
              type='date'
            />
          </div>
          <div className='text-postal2 '>
            <Radio
              onClick={() => handleRadio(1)}
              ischecked={radios[1] == true ? true : false}
              label=''
              value='Isolé* / Duo** / Famille'
              type='date'
            />
          </div>
        </div>
        <div className='d-flex mt-5 no-break'>
          <div className=' mr-4'>
            <Radio
              onClick={() => handleRadio(2)}
              ischecked={radios[2] == true ? true : false}
              label=''
              value='Affilié / Conjoint / Enfant'
              type='date'
            />
          </div>
          <div className='text-postal2'>
            <Radio
              onClick={() => handleRadio(3)}
              ischecked={radios[3] == true ? true : false}
              label=''
              value='Taux unique'
              type='date'
            />
          </div>
        </div>
        <div className='step-3-italic mt-3'>
          <p className='font-p2'>*Isolé veut dire célibataire ou assuré seul</p>
          <p className='font-p2'>
            **Duo étant 2 adultes ou un adulte et un enfant
          </p>
        </div>
      </div>

      <div className='nxt-btn1'>
        <button onClick={() => handleStep(0)} className='btn btnback'>
          <span className='mr-2'>
            <Icon name='chevleft' />
          </span>
          Retour
        </button>
        <button onClick={() => handleStep(1)} className='btn secondry-btn'>
          Continuer vers les conditions
        </button>
      </div>
    </div>
  );
};
