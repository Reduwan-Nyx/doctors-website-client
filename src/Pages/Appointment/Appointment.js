import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvaibleAppointments from './AvaibleAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvaibleAppointments date={date} setDate={setDate}></AvaibleAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;