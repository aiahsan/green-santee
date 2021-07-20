import React from 'react';
import Textbox from '../textbox';
import Select from '../select';
export default ({ handleStep }) => {
  return (
    <div className='stepper'>
      <h1>Entreprise à assurer</h1>
      <p className='mt-3'>
        Les informations ci-dessous nous permettront de vous contacter en cas de
        besoin.
      </p>
      <div className='flex-broke mt-48'>
        <div className='text-input-cst mr-4'>
          <Textbox label='Numéro de Siret' value='000 000 000 00000' />
        </div>
        <div className='text-input-cst'>
          <Textbox label='Raison sociale' value='F4EVENTS SAS' />
        </div>
      </div>
      <div className='flex-broke mt-4'>
        <div className='mr-4 text-address'>
          <Textbox
            label='Adresse'
            value='Saint-Remy-en-Bouzemont-Saint-Genest'
          />
        </div>
        <div className='text-postal'>
          <Textbox label='Code Postal' value='75016' />
        </div>
      </div>
      <div className='flex-broke mt-4'>
        <div className='mr-4 text-address'>
          <Textbox label='Ville' value='Mur Maria' />
        </div>
        <div className='mr-4 text-postal1'>
          <Textbox label='Effectif du collège' value='16 personnes' />
        </div>
        <div className='text-postal1'>
          <Select label='Code Postal' value='35 - 40 ans' />
        </div>
      </div>
      <div className='flex-broke mt-4'>
        <div className='w-100'>
          <Select label='Code Postal' value='35 - 40 ans' />
        </div>
      </div>
      <div className='nxt-btn'>
        <button onClick={() => handleStep(1)} className='btn secondry-btn'>
          Continuer vers la correspondance de l’entreprise
        </button>
      </div>
    </div>
  );
};
