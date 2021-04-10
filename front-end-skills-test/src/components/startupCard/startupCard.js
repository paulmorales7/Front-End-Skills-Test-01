import React from 'react';
import './startupCard.css';
import Header from '../header/header';
import orovault from '../../images/orovault.png';

function startUp (props) {
   
    return (
        <div>
            <Header />
            <h1 className='titleSt'>Featured Startups</h1>
  
            <div className='cardSt'>

                <div className='contentSt'>
                    <div className={props.ProjectName}></div>
                    <p className='oroInfo'>{props.ProjectDescription}</p>
                    <button className='giveBtn'>{props.GiveLink}</button>
                    <button className='learnBtn'>{props.LearnLink}</button>
                    <h3 className='currentFunding'>{props.CurrentFunding}</h3>
                    <div className='loading'></div>
                    <p className='funded'>{props.funded}</p>
                </div>

                

            </div>
           
        </div>
    )
}

export default startUp;
