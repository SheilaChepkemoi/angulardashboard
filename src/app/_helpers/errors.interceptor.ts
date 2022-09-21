
import { AppusersService } from './../services/appusers.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from "sweetalert2";



@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private appusersService: AppusersService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        // const error = err.error.message || err.statusText;
         const errorMsg = (err.error instanceof ErrorEvent) ? `Error: ${err.error.message}` : `Error Code: ${err.status},  Message: ${err.message}`;
        console.log(errorMsg);
        Swal.fire("Error", JSON.stringify(err.error.message), "error");
        // this.appusersService.showError(err.message);
        console.log("error");
        return throwError(errorMsg);
      
      }
      

    ));
  }
}
