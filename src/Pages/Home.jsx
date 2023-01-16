import React from 'react'
import logements from '../data/logements.json'
import Card from '../Components/Card'
import home_background from '../assets/home_background.png'
import Intro from '../Components/Intro'

const Home = () => {
    const textInIntro = <React.Fragment><div>Chez vous,</div><div className='lg:ml-5'>partout et ailleurs</div></React.Fragment>
    return (
        <div className='flex flex-col'>
            <Intro imgBackground={home_background} textInIntro={textInIntro} />
            <div className='bg-white md:bg-[#F7F7F7] grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 lg:gap-20  md:mt-11 mt-4 lg:p-12 mx-auto w-full md:rounded-3xl rounded-xl'>
                {logements.map(logement =>
                    <Card 
                        key={logement.id}
                        logement={logement}
                    />
                )}
            </div>
        </div>
    )
}

export default Home