import React from 'react';
import './title.css';

import mpLogo from '../../images/mp_logo-removebg-preview.png'
import mpLogoShape from '../../images/logoShape.png'
import butterfly from '../../images/butterfly.png';
import world from '../../images/world.png';
import filler from '../../images/filler.png';
import smallFiller from '../../images/smallFiller.png';
import group from '../../images/Group.png';


function title() {
return (
    <div className='mainDiv'>
        <div className='rectangle'>
        <img className='butterfly' src={butterfly} alt='butterfly' />
        <img className='filler' src={filler} alt='filler' />
        <img className='smallFiller' src={smallFiller} alt='small-filler' />
        <img className='world' src={world} alt='world' />
        <p className='rectP'>Learn high in <br/> Demand IT skills & get crypto</p>
        <p className='smallText'>powered by KoinStreet</p>
        <img className='group' src={group} alt='group' />
        </div>
        <img className='logo' src={mpLogo} alt='mp logo'/>
        <img className='logoShape' src={mpLogoShape} alt='mp logo shape'/>
    </div>
)
}

export default title;