import React from 'react';
import Textbox from '../textbox';
import Textboxnumber from '../textboxnumber';
import Select from '../select';
import Icon from '../icons'
export default  ({handleStep})=>{
    return <div className="stepper">
        <h1>Correspondant de l’entreprise</h1>
        <p className="mt-3">Les informations ci-dessous nous permettront de vous contacter en cas de besoin.</p>
        <div className="flex-broke mt-4">
        <div className="w-100 mr-4 "><Select label="Votre civilité" value="Monsieur" /> </div>

        <div className="mr-4 w-100"><Textbox label="Nom" value="Kruger" /> </div>
        <div className="mr-4 w-100"><Textbox label="Prénom" value="Erwin" /> </div>

        </div>
        <div className="flex-broke mt-4">

        <div className="mr-4 text-postal2"><Textbox label="Fonction" value="Président" /> </div>
        <div className="mr-4 w-100"><Textbox label="Adresse Mail" value="thomas@green-sante.fr" /> </div>

        </div>
        <div className="d-flex no-break mt-4">

        <div className="mr-4 text-postal2"><Textboxnumber label="Fonction" value="Président" /> </div>
        <div className="text-postal2"><Textboxnumber label="Adresse Mail" value="thomas@green-sante.fr" /> </div>

        </div>
        <div className="brd-btm"></div>

        <div className="flex-broke mt-4">

        <div className="mr-4 w-100"><Textbox label="Adresse" value="Saint-Remy-en-Bouzemont-Saint-Genest" /> </div>
        <div className="mr-4 text-postal"><Textbox label="Code Postal" value="75016" /> </div>

        </div>
        <div className="flex-broke mt-4">
        <div className="mr-4 w-100"><Textbox label="Ville" value="Mur Maria" /> </div>

        <div className="text-postal2 mr-4 "><Select label="Pays" value="France" /> </div>


        </div>
        <div className="nxt-btn1"> 
        
        <button onClick={()=>handleStep(0)} className="btn btnback">
           <span className="mr-2"> <Icon name="chevleft"/></span>
            Retour</button>
        <button onClick={()=>handleStep(1)} className="btn secondry-btn">Continuer vers la correspondance de l’entreprise</button>
        </div>
    </div>
}