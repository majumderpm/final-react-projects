import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import teeth from '../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {

    const servicesData =[
        {
            id:1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            img: fluoride,
        },
        {
            id:2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            img: cavity,
          
        },
        {
            id:3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia.',
            img: teeth,
           
        }
    ]


    return (

        <>
        <div className='text-center my-28'>
                <h3 className='font-xl font-bold text-primary uppercase'>our services</h3>
                <h2 className='font-bold text-4xl'>Services We Provide</h2>
            </div>
       
        <div  className='grid text-center gap-6 mt-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        
            {
               servicesData.map(service => <Service
                key={service.id}
                service={service}
            ></Service>)
            }
        </div>
        </>
    );
};

export default Services;