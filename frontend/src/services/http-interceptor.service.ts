import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastAlertService } from './toast-alert.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private alert: ToastAlertService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          this.alert.showError(errorMessage);
          return throwError(errorMessage)
        })
      )
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error ocurred';
    if (error.error instanceof ErrorEvent) {
      //Client side error
      errorMessage = error.error.message;
    } else {
      //Server side error
      if (error.status !== 0) {
        errorMessage = error.error.ErrorMessage;
      }
      errorMessage = error.error;
    }
    return errorMessage;
  }

}
