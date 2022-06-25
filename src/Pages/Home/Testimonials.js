import React from 'react';
import caught from '../../icons/quote.svg'
import people1 from '../../images/people1.png'
import people2 from '../../images/people2.png'
import people3 from '../../images/people3.png'
import Review from './Review';


const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'winson Herry',
            review: '',
            location: 'calafornia',
            
            img: people1
        },
{
            _id:2,
            name: 'winson Herry',
            review: '',
            location: 'calafornia',
            img: people2
        },
{
            _id:3,
            name: 'winson Herry',
            review: '',
            location: 'calafornia',
            img: people3
        },

    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
            <div>
                <h4 className="text-xl text-primary font-bold">Testimoinials</h4>
                <h2 className='text-3xl'>What Our Patient Says</h2>
            </div>
            <div>
                <img className='w-24 lg:w-48' src={caught} alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;