import React from 'react';
import Checkbox from './checkbox';
import Icon from './icons';

export default ()=>{
    return <div className="sidebar">
        <Checkbox title="Entreprise à assurer" ischecked={true} isactive={false}/>            
        <Checkbox title="Correspondant de l’entreprise" ischecked={false} isactive={true}/>            
        <Checkbox title="La santé" ischecked={false} isactive={false}/>            
        <Checkbox title="Les conditions" ischecked={false} isactive={false}/>            
        <Checkbox title="Mandat de prélèvement SEPA" ischecked={false} isactive={false}/>   
        <img className="mrt-15" src="/images/ap.png"/>
    </div>
}