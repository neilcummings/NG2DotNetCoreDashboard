import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {JwtHelper} from 'angular2-jwt';
import {AppConfig} from '../app.config';

@Injectable()
export class AuthenticationService {
  jwtHelper: JwtHelper = new JwtHelper();
  public currentUser: any;
  public isAdmin: boolean;

  constructor(private http: Http, private config: AppConfig) {}

  login(username: string, password: string) {
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.config.apiUrl + '/users/authenticate', {username: username, password: password}, options)
      .map((response: Response) => {
        let user = response.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.checkAuthenticationStatus();
        }
      });
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  checkAuthenticationStatus() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
