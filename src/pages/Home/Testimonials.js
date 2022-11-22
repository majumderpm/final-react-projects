import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <>
            <section className='my-32'>
                <div className='flex justify-between'>
                    <div>
                        <h5 className='font-xl font-bold text-primary uppercase'>Testimonials</h5>
                        <h2 className='text-5xl font-bold text-white'>What Our Patients Says</h2>
                    </div>
                    <figure>
                        <img className='sm:w-24 lg:w-48' src={quote} alt="quote" />
                    </figure>
                </div>
                <div>
        
                </div>
            </section>
        </>
    );
};

export default Testimonials;