import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';



class Login extends Component{
    
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            errors:{}           
            
        }
        this.username=this.username.bind(this);
        this.password=this.password.bind(this);
        this.login=this.login.bind(this);
        
    }
   
    
    login=(e)=>{
        
        e.preventDefault();
        let errors={};
       
        let formvalidstatus=true;  
          
        if(this.state.username=="") {
            
           formvalidstatus=false;
           errors["username"]="*Please enter your username !";
        }
       
         if(this.state.password==""){
            formvalidstatus=false;
            errors["password"]="*Please enter your password !";
        }
       
        //else{
        //     formvalidstatus=true;
        // }
        this.setState({
            errors:errors
        });
        if(formvalidstatus==true){
            let employee={username:this.state.username,
                password:this.state.password};
                
                
                console.log('employee=>'+JSON.stringify(employee));
                EmployeeService.login(employee).then(res=>{
                    
                    if(res['status']==200)
                    {
                        localStorage.setItem('useremailid',this.state.username);
                        localStorage.setItem('Loginsuccess',true); 
                        
                        window.location='/Dashboard';
                       
                        
                    }else{
                        toast('Login Failed',{
                            position:toast.POSITION.BOTTOM_CENTER,
                            type:toast.TYPE.ERROR,
                         })      
                         toast.show();        
                        localStorage.removeItem('useremailid');
                        window.location='/';
                    }
                    
                });
        }
        
    }


 

    username=(event)=>{
        
        this.setState({username:event.target.value});
       
        
       
    }
    password=(event)=>{
        this.setState({password:event.target.value});
    }

     

    render(){
        return(
            <div>
                <form className="addform"   >
                <h3>Login</h3><br></br>
                 <label id="username">Username</label>
                <input  id="username" type="text" name="username"  value={this.state.username} onChange={(e)=> this.username(e)} ></input><br></br>
                <div className="errorMsg">{this.state.errors.username}</div>
                 <label id="emppassw">Password</label>
                <input  id="emppassw" type="password" name="password"    value={this.state.password}  onChange={(e)=>this.password(e)}></input><br></br>
                <div className="errorMsg">{this.state.errors.password}</div>
                <button className="btn btn-warning buttonc" onClick={this.login}>Login</button>
                 
            </form>
            </div>
        )
    }
   
}
export default Login