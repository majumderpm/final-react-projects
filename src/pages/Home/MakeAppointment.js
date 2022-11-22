import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <>
            <section className='' style={{
                background:` url(${appointment})`,
                height: `353px`
            }}>
            <div className="hero my-32">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor} alt="doctor"
            className="-mt-28  max-w-md rounded-lg lg:w-1/2 h-2/4"
          />
          <div className="ml-28">
          <h3 className='font-xl font-bold text-primary uppercase'>Appointment</h3>
            <h2 className="text-5xl font-bold text-white">Make an appointment Today</h2>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white" >Get Started</button>
          </div>
        </div>
      </div>
            </section>
        </>
    );
};

export default MakeAppointment;