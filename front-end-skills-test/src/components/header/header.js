import React from 'react';
import './header.css';
import world from '../../images/world.png';
import filler from '../../images/filler.png';
import smallFiller from '../../images/smallFiller.png';
import mpLogo from '../../images/mp_logo-removebg-preview.png'
import mpLogoShape from '../../images/logoShape.png'
import group from '../../images/Group.png';
import bulb from '../../images/bulb.png';


function header() {
    return (
        <div className='mainDiv'>
        <div className='rectangle'>
        <img className='bulb' src={bulb} alt='bulb' />
        <img className='filler' src={filler} alt='filler' />
        <img className='smallFiller' src={smallFiller} alt='small-filler' />
        <img className='world' src={world} alt='world' />
        <p className='rectP'>Invest directly <br/> into minority innovations.</p>
        <img className='group' src={group} alt='group' />
        </div>
        <img className='logo' src={mpLogo} alt='mp logo'/>
        <img className='logoShape' src={mpLogoShape} alt='mp logo shape'/>
        </div>
    )
    }
    
    export default header;