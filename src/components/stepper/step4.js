import React from 'react';
import Textbox from '../textbox';
import Radio from '../radio';
import Select from '../select';
import Icon from '../icons'
import Check from '../checkbox2';
export default  ({handleStep}) => {
    const [checked,setchecked]=React.useState(false);
    return <div className="stepper">
        <h1>Les conditions</h1>
        <p className="mt-3">La date d’effet du contrat ne peut pas être antérieur au mois de réalisation du devis.</p>
        <div className="">
            <div className="step-4-item">
            <div className="step-4-head">    <Icon name="demand"/>
                <h3>Délai de renonciation</h3>
            </div>
            <div>
            <p>A compter de la date de conclusion de votre adhésion, il vous est accordé un délai de renonciation de 14 jours pour vous permettre, si vous le désirez, de revenir sur votre décision.</p>
            <p>Dans ce cas, vous devez en aviser Green Santé par lettre recommandée avec accusé de réception. La renonciation entraîne la restitution à vous-même de l’intégralité des sommes versées dans le délai maximum de 30 jours suivant la date de résiliation.</p>
            
            </div>
            </div>

        </div>
      
        <div className="pt-5">
            <div className="step-4-item">
            <div className="step-4-head">    <Icon name="voter"/>
                <h3>Votre déclaration</h3>
            </div>
            <div>
            <p>Avoir mis en place un régime obligatoire: soit par voie de conventions ou d’accords collectifs, soit par référendum ou par décision Unilatérale constatée par un écrit remis à chaque salarié.</p>
            <p>Avoir reçu et pris connaissance des conditions générales valant notice d’information H8650 pour les garanties Santé.</p>
            
            <p>
            Adhérer à la Garantie Médicale et Chirurgicale (GMC), association loi 1901, dont les status sont disponibles auprès de votre courtier conseil.
            </p>

            <p>
            Vous engager à déclarer tout sinistre intervenant entre la date de signature de la demande d’adhésion et la date effet des garanties mentionnée sur le certificat d’adhésion.
            </p>
            <p>
            Certifier exactes et sincères toutes les informations fournies dans le présent document. J’ai conscience que la signature de la présente demande d’adhésion vaut validation des déclarations et mentions que j’y ai faites.
            </p>
            <p>Être informé(e) que toute réticence ou fausse déclaration pourra entraîner, suivant les cas, la nullité du contrat ou la majoration des cotisations conformément aux dispositions des articles L 113-8 et L 113-9 du Code des assurances.</p>
            </div>
            </div>
            <Check checked={checked} setchecked={setchecked} title="J’accepte les conditions de la déclaration"/>
        </div>
        <div className="">
            <div className="step-4-item">
            <div className="step-4-head">    <Icon name="sheild"/>
                <h3>Protection des données personnel</h3>
            </div>
            <div>
          <p>Votre personnel sera informé des modalités de traitement et d’utilisation de leurs données à caractère personnel dans le cadre de l’exécution du présent contrat d’assurance au moment de leur affiliation.</p> 
            </div>
            </div>

        </div>
      

        <div className="nxt-btn1">

            <button onClick={()=>handleStep(0)} className="btn btnback">
                <span className="mr-2"> <Icon name="chevleft" /></span>
                Retour</button>
            <button onClick={()=>checked==true?handleStep(1):null} className={`btn ${checked==true?"secondry-btn":"secondry-btn-dsb"}`}>Continuer vers les conditions</button>
        </div>
    </div>
}