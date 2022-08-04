import axios from "axios";

const Employee_Baseurl="https://localhost:44348/api/Users";

class EmployeeService{
  
   
    login(employee){
        return axios.post(Employee_Baseurl+"/LoginUser",employee);
    }

    Register(employee){
        return axios.post(Employee_Baseurl+"/AddUser",employee);
    }

  
}

export default new EmployeeService()