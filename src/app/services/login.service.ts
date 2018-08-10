import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: String, password: String) {
    let url = "http://localhost:8181/token";
    let encodedCredential = btoa(username+":"+password);  // base64
    let basicHeader = "Basic "+encodedCredential;
    let headers = new Headers({
      'Content-Type' : 'applicaton/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    
    return this.http.get(url, {headers: headers});
  }

  checkSession() {
    let url = "http://localhost:8181/checkSession";
    let headers = new Headers({
      'x-auth-token': localStorage.getItem('xAuthToken'),
      'Authorization': "Basic "+localStorage.getItem('credentials')
    });
    
    return this.http.get(url, {headers: headers});
  }
}
