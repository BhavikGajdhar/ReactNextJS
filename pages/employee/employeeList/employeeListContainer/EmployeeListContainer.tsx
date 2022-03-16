import React, { useEffect, useState } from "react";
import {
  deleteEmployeeData,
  getEmployeeData,
} from "../../Middleware/employeeMiddleware";
import EmployeeListPresentation from "./employeeListPresentation/EmployeeListPresentation";

const EmployeeListContainer = (props: any) => {
  const [employeeList, setEmployeeList] = useState<any>([]);
  useEffect(() => {
    getEmployeeData().then((res) => {
      setEmployeeList(res.data);
    });
  }, []);
  const removeItem = (id: number) => {
    deleteEmployeeData(id);
    getEmployeeData().then((res) => {
      setEmployeeList(res.data);
    });
  };
  return (
    <div>
      <EmployeeListPresentation
        initialValue={employeeList}
        removeItem={removeItem}
      />
    </div>
  );
};

export default EmployeeListContainer;
