import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

import { User } from './user.model';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  _id: string;
  email: string;
  businessId: string;
  _token: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer: any;

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get id() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user._id;
        } else {
          return null;
        }
      })
    );
  }

  get token() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.token;
        } else {
          return null;
        }
      })
    );
  }

  constructor(private http: HttpClient) { }

  autoLogin() {
    return from(Plugins.Storage.get({ key: 'authData' })).pipe(
      map(storedData => {
        if (!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as AuthResponseData;
        const expirationTime = new Date(parsedData.expiresIn);
        if (expirationTime <= new Date()) {
          return null;
        }
        const user = new User(
          parsedData._id,
          parsedData.email,
          parsedData.businessId,
          parsedData._token,
          expirationTime
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
          this.autoLogout(user.tokenDuration);
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${environment.apiUrl}/user/signup`,
        { email: email, password: password }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${environment.apiUrl}/user/login`,
        { email: email, password: password }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({ key: 'authData' });
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  private setUserData(userData: AuthResponseData) {

    const expirationTime = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );
    const user = new User(
      userData._id,
      userData.email,
      userData.businessId,
      userData._token,
      expirationTime
    );
    this._user.next(user);
    this.autoLogout(user.tokenDuration);
    this.storeAuthData(
      userData._id,
      userData.email,
      userData.businessId,
      userData._token,
      expirationTime.toISOString()
    );
  }

  private storeAuthData(
    _id: string,
    email: string,
    businessId: string,
    _token: string,
    expiresIn: string,
  ) {
    const authData: AuthResponseData = {
      _id: _id,
      email: email,
      businessId: businessId,
      _token: _token,
      expiresIn: expiresIn,
    };
    Plugins.Storage.set({ key: 'authData', value: JSON.stringify(authData) });
  }
}
