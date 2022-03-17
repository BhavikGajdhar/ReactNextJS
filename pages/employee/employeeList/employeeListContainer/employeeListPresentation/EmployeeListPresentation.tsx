import React from "react";
import Link from "next/link";

const EmployeeListPresentation = (props: any) => {
 
  return (
    <div>
      <div className="App">
      <Link href="employeeForm/add">
        <button type="button">Add</button>
      </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.initialValue &&
            props.initialValue.map((user: any, i: number) => {
              return (
                <tr key={i}>
                  <td>{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link href={`employeeForm/edit/${user.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => props.removeItem(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeListPresentation;
