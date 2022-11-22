import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData =[
        {
            id:1,
            name: 'Opening hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name: 'Our Location',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact Us',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='grid gap-6 mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            cardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)
          }
        </div>
    );
};

export default InfoCards;