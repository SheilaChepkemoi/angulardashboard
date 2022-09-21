import { AppusersService } from './../../services/appusers.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router, private appuserService: AppusersService) {}

  
  

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin/home']);
    }
  }
//   login(loginForm: NgForm): void {
//     if (this.loginForm.valid) {
//       this.appuserService.login(this.loginForm.value).subscribe(
//         (result) => {
//           console.log(result);
//           this.router.navigate(['/admin/home']);
//           console.log(result)
//         },
//         (err: Error) => {
//           alert(err.message);
//         }
//       );

// }
//   }
public login(loginForm: NgForm) {
  
  if(loginForm.valid){
    
    this.appuserService.login(loginForm.value).subscribe(
      (response: any) => {
      this.auth.setToken(response.accessToken);

        Swal.fire('Success', 'Logged in successfully', 'success')
        console.log("user added successfully")
      
        loginForm.reset();
  
        // this.router.navigate(['login']);
        // this.router.navigate(['/admin']);
        console.log("which route")
        this.router.navigate(['/admin/home']);
        // this.auth.setRoles(response.roles);
        
  
        // const role = response.roles[0];
        // if (role === 'ROLE_ADMIN') {
        //   this.router.navigate(['/admin/home']);
        // } else {
        //   this.router.navigate(['/user']);
        // }
      },
    
    );
    
  }

}
}
