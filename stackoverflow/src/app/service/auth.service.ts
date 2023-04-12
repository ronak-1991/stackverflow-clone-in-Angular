import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = environment.baseurl
  registration=environment.registration
  constructor(private http: HttpClient) { }

    postregistrationData(body: any) {
      try {
      return this.http.post(this.baseurl + this.registration, body);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
    }

    getUserData() {
      try {
      return this.http.get(this.baseurl + this.registration);
    } catch (error:any) {
      return throwError(() => new Error(error));
    }
    }


  }

