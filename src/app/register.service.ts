import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http:HttpClient) { }

addUser(formData){
  debugger
  return this.http.post(`${environment.apiUrl}register`,formData)
}
}
