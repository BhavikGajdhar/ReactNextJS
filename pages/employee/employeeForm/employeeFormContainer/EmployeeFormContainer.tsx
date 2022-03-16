import React, { useEffect } from "react";
import EmployeeFormPresentation from "./employeeFormPresentation/EmployeeFormPresentation";
import { useRouter } from "next/router";
import {
  postEmployeeData,
  putEmployeeData,
} from "../../Middleware/employeeMiddleware";

const EmployeeFormContainer = (props: any) => {
  const router = useRouter();

  /** Add The Employee Data Middleware Call */
  const saveValue = (value: any) => {
    postEmployeeData(value).then((res) => {
      if (res.data) {
        router.push("/employee/employeeList");
      }
    });
  };

  /** Updated The Employee Data Middleware  */
  const updateValue = (id: number, value: any) => {
    putEmployeeData(id, value).then((res) => {
      if (res.data) {
        router.push("/employee/employeeList");
      }
    });
  };

  const navigate = () => {
    router.push("/employee/employeeList");
  };

  return (
    <div className="App">
      <EmployeeFormPresentation
        initialValues={props.initialValues}
        save={saveValue}
        update={updateValue}
        navigate={navigate}
      />
    </div>
  );
};

export default EmployeeFormContainer;
