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
        <div className='mainDiv2'>
        <div className='rectangle2'>
        <img className='bulb2' src={bulb} alt='bulb' />
        <img className='filler2' src={filler} alt='filler' />
        <img className='smallFiller2' src={smallFiller} alt='small-filler' />
        <img className='world2' src={world} alt='world' />
        <p className='rectPSt'>Invest directly <br/> into minority innovations.</p>
        <img className='groupSt' src={group} alt='group' />
        </div>
        <img className='logo' src={mpLogo} alt='mp logo'/>
        <img className='logoShape' src={mpLogoShape} alt='mp logo shape'/>
        </div>
    )
    }
    
    export default header;