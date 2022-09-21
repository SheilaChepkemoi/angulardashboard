import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, 
    private userservice: UsersService,
    @Inject(MAT_DIALOG_DATA) 
    public editUserData:any,
    private dialogRef: MatDialogRef<DialogComponent>) { }
    actionBtn: string = "Save";

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['',Validators.required]

    })
    if(this.editUserData){
      this.actionBtn = "Update"
      this.userForm.controls['name'].setValue(this.editUserData.name);
      this.userForm.controls['username'].setValue(this.editUserData.username);
      this.userForm.controls['email'].setValue(this.editUserData.email);
      
    }
    console.log(this.editUserData)
   
  }

  addUser(){
    if(!this.editUserData){
      
      if(this.userForm.valid){
      this.userservice.postUser(this.userForm.value).subscribe(
        (response) => {
          Swal.fire('Success', 'User added successfully', 'success');
          console.log(response);
          this.userForm.reset();
          this.dialogRef.close();
        
        },
        (error) => {
          Swal.fire('Error', 'Failed to add User', 'error')
          
          this.userForm.reset();
        }
      )
    }
   
    }
     else{
      this.updateUsers();
    }
  
  }

  updateUsers(){
    this.userservice.updateUser(this.userForm.value, this.editUserData.id)
    .subscribe((response)=>{
      Swal.fire('Updated', 'User updated successfully', 'success');
      console.log(response);
      this.userForm.reset();
      this.dialogRef.close('Update');
      

    }, 
    (error) => {
      Swal.fire('Error', 'Failed to update User', 'error')
      this.userForm.reset();
    }
    )
    

  }

 
 
  // updateUsers(){
  //   this.userservice.updateUser(this.userForm.value, this.editUserData.id)
  //   .subscribe((response)=>{
  //     Swal.fire('Updated', 'User updated successfully', 'success');
  //     console.log(response);
  //     this.userForm.reset();
  //     this.dialogRef.close('update');
      

  //   }, 
  //   (error) => {
  //     Swal.fire('Error', 'Failed to update User', 'error')
  //     this.userForm.reset();
  //   }
  //   )
    

  // }

}
