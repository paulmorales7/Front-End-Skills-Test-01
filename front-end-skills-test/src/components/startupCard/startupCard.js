import React from 'react';
import './startupCard.css';
import Header from '../header/header';

function startUp (props) {

    const code = 'Help <Code />'
   
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
                    <div className='loading2'></div>
                    <p className='funded'>{props.funded}</p>
                </div>


               
            </div>

            <h1 className='feaSt'>Upcoming Startups</h1>
            
            <div className='cardUp'>

                <div className='contentUp'>
                    <div className='OroVault'></div>
                    <p className='oroInfo1'>changing the way you gold forever</p>
                    {/* <button className='giveBtn'>{props.GiveLink}</button> */}
                    <button className='learnBtn2'>{props.LearnLink}</button>
                    <h3 className='currentFunding'>{props.CurrentFunding}</h3>
                    <div className='loading2'></div>
                    <p className='funded'>{props.funded}</p>
                </div>
               
            </div>

        
                <button className='buttonAdvise'>Advise A Startup</button>
                <button className='buttonJoin'>Join Minority Ventures Cohort</button>
                <button className='buttonHelp'>{code}</button>
         

           
        </div>
    )
}

export default startUp;
