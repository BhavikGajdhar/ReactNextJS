import { useRouter } from 'next/router';
import React from 'react'
import EmployeeFormContainer from './employeeFormContainer/EmployeeFormContainer';

const index = () => {
  return (
    <div>
        <EmployeeFormContainer/>
    </div>
  )
}

export default index