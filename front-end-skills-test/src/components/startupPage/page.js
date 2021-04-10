import React, {useState, useEffect} from 'react';
import Wrapper from '../wrapper/wrapper';
import Header from '../header/header';
import StartUpCard from '../startupCard/startupCard';

function Page () {

    const arr = [
        {
            id: 1,
            ProjectName: "OroVault",
            ProjectDescription: "changing the way you gold forever",
            CurrentFunding: "$83,000/$100,000",
            GiveLink: "Give",
            LearnLink: "Learn",
            funded: "83% Funded"
        },
    
        {
            id: 2,
            ProjectName: "mangoswap",
            CurrentFunding: "$83,000/$100,000",
            GiveLink: "Give",
            LearnLink: "Learn",
            funded: "83% Funded"
        },
    
        {
            id: 3,
            ProjectName: "MinorityThinkTank",
            CurrentFunding: "$83,000/$100,000",
            GiveLink: "Give",
            LearnLink: "Learn",
            funded: "83% Funded"
        },
    
        {
            id: 4,
            ProjectName: "MinorityVentureCapital",
            CurrentFunding: "$83,000/$100,000",
            GiveLink: "Give",
            LearnLink: "Learn",
            funded: "83% Funded"
        },
    
        {
            id: 5,
            ProjectName: "OroVault",
            ProjectDescription: "changing the way you gold forever",
            CurrentFunding: "$83,000/$100,000",
            GiveLink: "Give",
            LearnLink: "Learn",
            funded: "83% Funded"
        }
    ]


    const [startUp, setStartUp] = useState()
    useEffect(() => {
        setStartUp(arr)
    }, [])

    return (
        <Wrapper>
             <Header />
            {arr.map(strt => {                
                return(                
                    <StartUpCard
                        Key={strt.id}
                        ProjectName={strt.ProjectName}
                        ProjectDescription={strt.ProjectDescription}
                        ProjectLogo={strt.ProjectLogo}
                        CurrentFunding={strt.CurrentFunding}
                        FundingGoal={strt.FundingGoal}
                        GiveLink={strt.GiveLink}
                        LearnLink={strt.LearnLink}
                        funded={strt.funded}
                    />
                )
            })}

        </Wrapper>
    )
}

export default Page;