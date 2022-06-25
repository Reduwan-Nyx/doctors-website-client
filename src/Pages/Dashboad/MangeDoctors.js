import React, {useState} from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import DoctorRow from './DoctorRow';

const MangeDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `BEARER ${localStorage.getItem('accesstoken')}`
        }
    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <ht className="text-2xl">Manage Doctors: {doctors.length}</ht>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
  
        {
            doctors.map((doctor , index) => <DoctorRow
            key={doctor._id}
            doctor={doctor}
            index = {index}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
            ></DoctorRow>)
        }
    
 
    </tbody>
  </table>
</div>
{deletingDoctor && <DeleteConfirm
deletingDoctor={deletingDoctor}
refetch={refetch}
setDeletingDoctor={setDeletingDoctor}
></DeleteConfirm>}
        </div>
    );
};

export default MangeDoctors;