import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userSettings } from './UserSettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "https://putsreq.com/qDe9dnHKeayACMEmwiLM/"

  constructor(private http : HttpClient) { }

  postUserRecords(userrecords : userSettings) : Observable<userSettings>
  {
    return this.http.post<userSettings>(this.url , userrecords)
  }
}
