import React from 'react';
import Icon from './icons'
export default ({label,value})=>{
    const [ischecked,setischecked]=React.useState(false);
    return <div onClick={()=>setischecked(!ischecked)} className={`green-textbox crs-pntr ${ischecked==true?"brd-radio":""}`}>
        <label>{label}</label>
<div className="mt-1 mb-2 cms1">
    <div><Icon name={ischecked==true?"radiocheck":"radiouncheck"}/></div>
    <h4>{value}</h4>
</div>
    </div>
}