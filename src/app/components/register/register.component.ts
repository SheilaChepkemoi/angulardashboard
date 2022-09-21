import { Appusers } from './../../appusers';
import { AppusersService } from './../../services/appusers.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // appuser!: Appusers[];
  userName= '';
  emailaddress='';
  pass='';
  failAllConditions = false;
  invalidemail = false;
 
  registerForm: any;
  username:any;
  password:any;
  email:any;

  constructor(private appuserService: AppusersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public register(){
    
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
    if (!regex.test(this.pass)) {
      this.failAllConditions = true;
      return;
    }
    else if(!regexemail.test(this.emailaddress)){
      this.invalidemail = true;
    }
    else{
      console.log("Hurray !!");
      this.failAllConditions = false;
      this.invalidemail = false;
    }
 
  //   console.log(this.pass);
  // }


}
// public validateForm(username: any, email: any, password: any){
//  if(username.invalid)

// }
public registerUser(registerForm: NgForm): void {

  
  this.appuserService.newUser(registerForm.value).subscribe(
    (response: Appusers) => {
      Swal.fire("Success", "You have been registered successfully", "success")
      console.log("user added successfully")
      registerForm.reset();
      this.router.navigate(['login']);
    
    }
    // (error)=>{
    //   Swal.fire("Error", JSON.stringify(error.message), "error");
    // }
   
  );
}
}
