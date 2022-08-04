import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import'./Register.css'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
           
            confirmpassword:'',
            Rolename:'',
            errors:{}   
        }

        this.username=this.username.bind(this);
      
        this.password=this.password.bind(this);
        this.confirmpassword=this.confirmpassword.bind(this);
        this.Rolename=this.Rolename.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    } 
    
    saveEmployee=(e)=>{
        e.preventDefault();
        let errors={};
       // var pattern=new RegExp( /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
      // var patt=new RegExp(/\d$/);        
        let formvalidstatus=true;  
         
        if(this.state.username==""){
            
         formvalidstatus=false;
         errors["username"]="*Please enter your name !";
        }       
       
       if((this.state.password)==""){
          
        formvalidstatus=false;
        errors["password"]="*Please enter your password !";
    }
     if(this.state.confirmpassword != this.state.confirmpassword){
        formvalidstatus=false;
        errors["confirmpassword"]="*Passwords kdo not match !";
      }
      
      this.setState({
          errors:errors
      });
      if(formvalidstatus==true){
        let employee={username:this.state.username,
                    
                      password:this.state.password,
                      Rolename:this.state.Rolename,
                    };
                    console.log('employee=>'+JSON.stringify(employee));

                    EmployeeService.Register(employee).then(res=>{
                        window.location="/";
                        localStorage.setItem('Resgisterstatus',true);
                        
                        
                    });

    }
   }

    
     username=(event)=>{
        this.setState({username:event.target.value});
     }
    
     password=(event)=>{
        this.setState({password:event.target.value});
     }
     confirmpassword=(event)=>{
        this.setState({confirmpassword:event.target.value});
     }
     Rolename=(event)=>{
        this.setState({Rolename:event.target.value});
     }
     cancel(){
        window.location="/Login";
     }

     render(){
        return(
            <div>
                  
            <form className="addform">
                <h3>Add Employee</h3><br></br>

                <label id="username" >userName</label>
                <input  id="username" type="text" name="name"  onChange={(e)=> this.username(e)}></input><br></br>
                <div className="errorMsg">{this.state.errors.username}</div>
              
                <label id="password">Password</label>
                <input  id="password" type="password"  name="password" onChange={(e)=>this.password(e)}></input><br></br>
                <div className="errorMsg">{this.state.errors.password}</div>
                <label id="confirmpassword">Confirm Password</label>
                <input  id="confirmpassword" type="password"  name="confirmpassword" onChange={(e)=>this.confirmpassword(e)}></input><br></br>
                <div className="errorMsg">{this.state.errors.confirmpassword}</div>
                <label id="Rolename" >Rolename</label>
                <select onChange={(e)=>this.Rolename(e)} name="Rolename">
                    
                      
                      <option value='HR'>HR</option>
                      <option value='Recruitor'>Recruiter</option>
                </select><br></br>
                <div className="errorMsg">{this.state.errors.Rolename}</div>
                <button className="btn btn-warning buttonc" onClick={this.saveEmployee}>Create</button>
                <Link to={'/'}><button className="btn btn-primary butc" type="submit" onClick={()=>{window.location='/viewemployee'}}>Back</button>
            </Link> 
            </form>
        </div>
            
        )
     }
}
export default Register