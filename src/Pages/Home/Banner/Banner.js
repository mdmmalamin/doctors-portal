import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import InfoCards from '../InfoCards/InfoCards';

const Banner = () => {
    return (
        <header className='bg-contain bg-no-repeat mt-10 lg:pt-48' style={{backgroundImage: `url(${bg})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse px-0 gap-6">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="dentist chair" />
                    <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
            <InfoCards></InfoCards>
        </header>
    );
};

export default Banner;