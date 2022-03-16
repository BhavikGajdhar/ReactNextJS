import React from 'react';


const EmployeeListPresentation = (props:any) => {

  const navigateBack = () => {
    props.navigate();
  };
  return (
    <div>
      {/* <NavLink to="/add">
        <button type="button" onClick={() => navigateBack()}>
          Add
        </button>
      </NavLink> */}
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
            props.initialValue.map((user:any, i:number) => {
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
                    {/* <NavLink to={`/edit/${user.id}`}>
                      <button>Edit</button>
                    </NavLink> */}
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
  )
}

export default EmployeeListPresentation