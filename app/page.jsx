import React from 'react'
import {
    PlusIcon
  } from "@heroicons/react/24/outline";
import AttendanceToday from '@/components/AttendanceToday'; 


const page = () => {
  return (
      <div className=''>
          {/*Button New Employee, New Leave*/}
        <div className="flex gap-x-4">
            <button className="bg-primary rounded-lg flex items-center font-semibold text-white gap-3 px-3 py-2"><PlusIcon className='stroke-2' width="20" height="20"/>Add New Employee</button>
            <button className="bg-primary rounded-lg flex items-center font-semibold text-white gap-3 px-3 py-2"><PlusIcon className='stroke-2' width="20" height="20"/>Create New Leave</button>
          </div>
        <div>
      <AttendanceToday/>    
        </div>
    </div>
  )
}

export default page