import React from 'react';
export default ({label,value,type})=>{
    return <div className="green-textbox">
        <label>{label}</label>
       <select value={value}>
           <option>{value}</option>
       </select>
    </div>
}