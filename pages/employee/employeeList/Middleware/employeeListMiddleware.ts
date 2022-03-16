import axios from 'axios';
import React from 'react'

const url = "http://localhost:4500/employee";

export const getEmployeeData = () => {
    return axios.get(url)
  };

  /** Delete Data By ID Call*/
  export const deleteEmployeeData = (id:number) => {
    
  };
