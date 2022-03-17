import React from "react";
import Link from "next/link";

const index = (props: any) => {
  return (
    <div className="App">
      <h3>HEllo World</h3>
      <Link href="employee/employeeList">
        <button type="button">EmployeeList</button>
      </Link>
    </div>
  );
};

export default index;
