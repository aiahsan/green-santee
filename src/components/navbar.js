import React from 'react';
import Icon from './icons'
export default () => {
    return <div className="navcst">
        <div className="navcst-inner">
            <div className="d-flex justify-content-between ">
                <Icon name="logo" />
                <div className="nav-btn-flex">
                    <button className="btn secondry-btn">Se connecter</button>
                    <button className="btn primary-btn">Nous contacter</button>
                </div>
            </div>
        </div>
    </div>
}