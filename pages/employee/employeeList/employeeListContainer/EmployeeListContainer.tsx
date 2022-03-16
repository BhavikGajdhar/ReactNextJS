import React, { useEffect, useState } from 'react'
import { getEmployeeData } from '../Middleware/employeeListMiddleware';
import EmployeeListPresentation from './employeeListPresentation/EmployeeListPresentation';


const EmployeeListContainer = (props:any) => {
  const [favoriteAuctionList, setEmployeeList] = useState<any>([]);
  useEffect(()=>{
    getEmployeeData().then((res)=>{
      setEmployeeList(res.data);
    })
  },[]);
  return (
    <div>
      <EmployeeListPresentation initialValue={favoriteAuctionList}/>
    </div>
  )
}



export default EmployeeListContainer;