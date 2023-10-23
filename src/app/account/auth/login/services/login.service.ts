import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN } from 'src/app/constants/api';
import { StorageType } from 'src/app/constants/storage-type';
import { GlobalService } from 'src/app/core/services/global.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private globalService: GlobalService
  ) {}

  login(loginForm: FormGroup) {
    const { email, password } = loginForm.value;
    return this.http
      .post(LOGIN.LOGIN_API, {
        email: email,
        password: password,
      })
      .toPromise()
      .then(response => {
        const result = JSON.parse(JSON.stringify(response));
        if (result.status) {
          const accessToken: string = result.data.token;
          this.globalService.decodeToken = JSON.parse(
            atob(accessToken.split('.')[1])
          );
          this.setAccessToken(result.data.token);
        }
        return result;
      });
  }

  public setAccessToken(accessToken: string) {
    StorageService.set(StorageType.ACCESS_TOKEN, accessToken);
  }

  public isLoggedIn() {
    const accessToken = StorageService.get(StorageType.ACCESS_TOKEN);
    return accessToken;
  }

  public logout() {
    localStorage.clear();
    sessionStorage.clear();
    StorageService.clear();
  }
}
