import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getByIdEmployeeData } from "../Middleware/employeeMiddleware";
import EmployeeFormContainer from "./employeeFormContainer/EmployeeFormContainer";

const id = (props:any) => {
    const router = useRouter();
    const id = router.query.id;
    const [employeeData, setEmployeeData] = useState<any>();
  useEffect(() => {
    if (id) {
      getByIdEmployeeData(parseInt(id as string)).then((res) => {
        setEmployeeData(res.data);
      });
    }
  }, [id]);
  return (
        <div>
            <EmployeeFormContainer  initialValues={employeeData}/>
        </div>
  )
};

export default id;
