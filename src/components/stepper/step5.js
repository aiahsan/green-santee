import React from 'react';
import Textbox from '../textbox';
import Radio from '../radio';
import Select from '../select';
import Icon from '../icons';
import Check from '../checkbox2';
import { FileDrop } from 'react-file-drop';

export default ({ handleStep }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [checked, setchecked] = React.useState(false);
  return (
    <div className='stepper'>
      <h1>Mandat de prélèvement SEPA</h1>
      <p className='mt-3 stepp-5-text'>
        Référence unique du mandat: Communiquée ultérieurement dans le document
        confirmant l’adhésion
      </p>
      <p className='mt-3 stepp-5-text'>
        Veuillez préciser les coordonnées du compte sur lequel les cotisations
        seront débitées:
      </p>
      <div className='d-flex mt-48 pt-4'>
        <div className='w-100 mr-4'>
          <Textbox
            label='Numéro d’identification international du compte bancaire - IBAN'
            value='FR76 3006 6109 3750 2015 6574 122'
          />
        </div>
      </div>
      <div className='d-flex mt-48'>
        <div className='w-100 mr-4'>
          <Textbox
            label='Code international d’identification de votre banque - BIC'
            value='CMCIFRKK'
          />
        </div>
      </div>
      <div className='flex-broke mt-48'>
        <div className='w-100 mr-4'>
          <Textbox label='Créancier' value='Henner-GMC / FR56AAA414162' />
        </div>
        <div className='text-postal2 mr-4'>
          <Textbox label='Débiteur' value='Veritronic' />
        </div>
      </div>

      <h4 className='mt-5 pt-3'>
        Merci de joindre au présent document un Relevé d’Identité Bancaire.
      </h4>
      <FileDrop
        onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
        onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
        onFrameDrop={(event) => console.log('onFrameDrop', event)}
        onDragOver={(event) => console.log('onDragOver', event)}
        onDragLeave={(event) => console.log('onDragLeave', event)}
        onDrop={(files, event) => console.log('onDrop!', files, event)}
      >
        <label className='download-btn btn'>
          <input type='file' className='file-upload-cst' />

          <p>Faites glisser le fichier XXX ici</p>
          <p>
            ou <span>parcourez votre ordinateur </span>
          </p>
        </label>
      </FileDrop>
      <div className='mt-5 brd-btm'></div>

      <div className='mt-4 step-5-item'>
        <div>
          <p>
            Vous autorisez le gestionnaire Henner à envoyer des instructions à
            votre banque pour débiter votre compte, et votre banque à débiter
            votre compte conformément aux instructions d’Henner. Vous bénéficiez
            du droit d’être remboursé par votre banque selon les conditions
            décrites dans la convention que vous avez passée avec elle.
          </p>
          <p>
            Une demande de remboursement doit être présentée dans les 8 semaines
            suivant la date de débit de son compte pour un prélèvement autorisé.
            L’exercice de ce droit à remboursement est sans effet sur les
            engagements réciproques du client débiteur et du créancier. Vos
            droits concernant le présent mandat sont expliqués dans un document
            que vous pouvez obtenir auprès de votre banque.
          </p>
        </div>
      </div>
      <Check
        checked={checked}
        setchecked={setchecked}
        title='J’autorise les conditions du gestionnaire Henner'
      />

      <div className='nxt-btn1'>
        <button onClick={() => handleStep(0)} className='btn btnback'>
          <span className='mr-2'>
            <Icon name='chevleft' />
          </span>
          Retour
        </button>
        <button
          onClick={() => (checked == true ? handleStep(1) : null)}
          className={`btn ${
            checked == true ? 'secondry-btn' : 'secondry-btn-dsb'
          }`}
        >
          Je confirme mon adhésion
        </button>
      </div>
    </div>
  );
};
