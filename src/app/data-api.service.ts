import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})

export class DataApiService {
  public rootUrl = 'http://192.168.1.77:3000';

  constructor(private http: HttpClient) { }

  getAllImages() {
    const url_api = this.rootUrl + '/general';
    return this.http.get(url_api);
  }

  /*getImagesId(id: string) {
    const url_api='http://localhost:3000/general/${id}';
    return (this.imagen=this.http.get(url_api));
  }*/

}
