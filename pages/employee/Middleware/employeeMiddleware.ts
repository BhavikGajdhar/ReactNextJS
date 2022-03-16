import axios from "axios";

const url = "http://localhost:4500/employee";

export const getEmployeeData = () => {
  return axios.get(url);
};

/** Delete Data By ID Call*/
export const deleteEmployeeData = (id: number) => {
  return axios.delete(url + "/" + id);
};

export const postEmployeeData = (data: any) => {
  return axios.post(url, data);
};

export const getByIdEmployeeData = (id: number) => {
  return axios.get(url + "/" + id);
};

export const putEmployeeData = (id: number, data: any) => {
  return axios.put(url + "/" + id, data);
};
