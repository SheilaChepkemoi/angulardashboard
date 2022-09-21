import { Users } from './../users/users';
import { Appusers } from './../../appusers';
import  Swal from 'sweetalert2';
import { AppusersService } from './../../services/appusers.service';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  // public users: Users[] = [];
  data: any = []

  constructor(private appuserService: AppusersService, public userservice: UsersService ) { }

  ngOnInit(): void {
    this.getallUsers();
    

  }
  public getallUsers(): void {
    this.userservice.getUser().subscribe(
      (response:any) => {
        this.data = response;
        console.log(response);
      
      },
      (error) => {
        Swal.fire('Error', 'Error when fetching records', 'error')
        
      }
    );
  }


}
