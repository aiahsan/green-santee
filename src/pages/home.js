import React from 'react';
import Nav from '../components/navbar'
import SideBar from '../components/sidebar';
import Step1 from '../components/stepper/step4'
export default ()=>{
    return <div className="">
<Nav/>
<div className="d-flex">
    <SideBar/>
    <Step1/>
</div>
    </div>
}