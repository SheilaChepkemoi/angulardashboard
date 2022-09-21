// import { AppusersService } from './appusers.service';
// import { Injectable } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';


// @Injectable({
//   providedIn: 'root'
// })
// export class HandleerrorsService {

//   constructor(private appusersService: AppusersService) { }
//   public handleError(err: HttpErrorResponse): void {
//     let errorMessage: string;
//     if (err.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       errorMessage = `An error occurred: ${err.error.message}`;
//     } else if (err.error instanceof Blob) {
//       // Error handled during download
//       err.error.text().then((txt) => {
//         const res = JSON.parse(txt);
//         // this.toastrService.warning(res.message);
//         this.appusersService.showError(res.message);
//       });
//     } else {
//       // The backend returned an unsuccessful response code.
//       // errorMessage = `Error Code: ${err.status},  Message: ${err.error}`;
//       errorMessage = `Message: ${err.error}`;

//       console.log(`Message: ${err.error}`);
//       // this.toastrService.warning(errorMessage);
//       this.appusersService.showError(errorMessage);
//     }

//   }

//   public handleMessaging(message: string, code: number) {
//     if (
//       message
//     ) {
//       if (
//         message === 'null' ||
//         message.trim().length < 1 ||
//         message === ''
//       ) {
//         console.warn('No toastr for empty messages');
//       } else {
//         if (code === 200) {
//           // this.toastrService.info(message);
//           this.appusersService.showSuccess(message);
//         } else {
//           // this.toastrService.warning(JSON.stringify(message));
//           this.appusersService.showError(JSON.stringify(message));
//         }

//       }

//     } else {
//       console.warn('No toastr for null messages');
//     }
//   }
// }
