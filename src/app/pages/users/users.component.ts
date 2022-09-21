import { DialogComponent } from './../../modules/admin/components/dialog/dialog.component';

import { Component,  OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

  
  // allUsers: any = []
  // page: number = 1;
  // count: number = 0;
  // tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userservice: UsersService, public dialog: MatDialog){}
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  dataSource!: MatTableDataSource<any>;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(){
    this.getallUsers();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog() {
    this.dialog.open(DialogComponent,{
      width:'40%'
    }).afterClosed().subscribe((val)=>{
      if(val === 'Save'){
        this.getallUsers();
      }
    });
    
  }
  public getallUsers(): void {
    this.userservice.getUser().subscribe(
      (response) => {
        // this.employees = response;
        console.log(response);
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
      },
      (error) => {
        Swal.fire('Error', 'Error when fetching records', 'error')
        
      }
    );
  }

  removeUser(id: number){
    this.userservice.deleteUser(id).subscribe(
      (response) => {
        Swal.fire('Deleted', 'User deleted successfully', 'success')
        // this.employees = response;
        console.log(response);
        this.getallUsers();
        
      },
      (error) => {
        Swal.fire('Error', 'Error when deleting user', 'error')
        
      }
    );
    
  }

  editUser(row:any){
    this.dialog.open(DialogComponent,{
      width: '40%',
      data:row
    }).afterClosed().subscribe((value=>{
      if(value === 'Update'){
        this.getallUsers();
      }
    }))
  }
  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.getusers();
  // }
  // onTableSizeChange(event: any): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.getusers();
  // }
//   getusers(){
//     this.userservice
//         .users()
//         .subscribe((response: any) => {
//           this.allUsers = response.data;
//         });

 
  

  
// }
}
