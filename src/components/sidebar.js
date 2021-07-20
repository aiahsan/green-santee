import React from 'react';
import Checkbox from './checkbox';
import Icon from './icons';

export default ({stepcount})=>{
    return <div className="sidebar">
       <div >
       <div>
       <Checkbox title="Entreprise à assurer" ischecked={stepcount>=2?true:false} isactive={stepcount==1?true:false}/>            
        <Checkbox title="Correspondant de l’entreprise" ischecked={stepcount>=3?true:false} isactive={stepcount==2?true:false}/>            
        <Checkbox title="La santé" ischecked={stepcount>=4?true:false} isactive={stepcount==3?true:false}/>            
        <Checkbox title="Les conditions" ischecked={stepcount>=5?true:false} isactive={stepcount==4?true:false}/>            
        <Checkbox title="Mandat de prélèvement SEPA" ischecked={stepcount>=6?true:false} isactive={stepcount==5?true:false}/>   
        <img className="mrt-15" src="/images/ap.png"/>
       </div>
       </div>
    </div>
}