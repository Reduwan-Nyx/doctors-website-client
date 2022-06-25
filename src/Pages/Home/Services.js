import React from 'react';
import fluride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Service from './Service';
import ServiceDetail from './ServiceDetail';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride treatment',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: fluride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: cavity
        },
        {
            _id: 3,
            name: 'teeth Whitening',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            
            <div className='text-center '>
            <h3 className='text-primary text-xl from-bold uppercase'>Our Services</h3>
            <h2 className='text-4xl mt-3'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                      services.map(service => <Service
                      key={service._id}
                      service={service}
                      ></Service>)
                    }
            </div>
            <ServiceDetail></ServiceDetail>
        </div>
    );
};

export default Services;