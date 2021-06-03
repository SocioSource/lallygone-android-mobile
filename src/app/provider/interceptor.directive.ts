//httpConfig.interceptor.ts
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../service/service.service';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private st:Storage,private service:AuthService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    //Authentication by setting header with token value
    if (this.service.token) {
      request = request.clone({
        setHeaders: {
          'Authorization':  this.service.token
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: { 
          // 'Access-Control-Allow-Origin': '*',
          'Content-type':'application/json;charset=UTF-8', 
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization',
          // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    // this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => { 
        // if (event instanceof HttpResponse) {
        //   console.log('event--->>>', event);
        // }
        // this.hideLoader();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // console.error(error);
        // this.hideLoader();
        return throwError(error);
      }));
  }

}