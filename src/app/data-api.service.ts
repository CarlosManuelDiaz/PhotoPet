import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class DataApiService {
  public rootUrl = 'http://192.168.1.53:3000';

  constructor(private http: HttpClient) { }

  getAllImages() {
    const url_api = this.rootUrl + '/general';
    return this.http.get(url_api);
  }
}
