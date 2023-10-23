import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { StorageService } from '../services/storage.service';
import { StorageType } from 'src/app/constants/storage-type';
import { Router } from '@angular/router';
/** Inject With Credentials into the request */

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  accessToken!: string | null;
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.accessToken = StorageService.get(StorageType.ACCESS_TOKEN);

    req = req.clone({
      url: environment.apiServer + req.url,
      headers: req.headers.set(
        'token',
        this.accessToken ? this.accessToken : ''
      ),
    });

    return next
      .handle(req)
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            if (evt.body.code === 501 || evt.body.code === 503) {
              window.location.href = '';
              StorageService.remove(StorageType.ACCESS_TOKEN);
            }
          }
          return evt;
        })
      );
  }
}
