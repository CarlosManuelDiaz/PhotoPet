import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  apiUrl = 'http://localhost:3000';

  constructor( public http: Http, private transfer: FileTransfer) {
  }

  uploadImage(img, desc) {
    const url = this.apiUrl + '/upload';

    const targetPath = img;

    const options: FileUploadOptions = {
      fileKey: 'image',
      chunkedMode: false,
      mimeType: 'multipart-form-data',
      params: { 'desc': desc }
    };

    const fileTransfer = this.transfer.create();

    return fileTransfer.upload(targetPath, url, options);
  }
  getImages() {
    return this.http.get(this.apiUrl + '/images').pipe(map(res => res.json()));
  }

  deleteImage(img) {
    return this.http.delete(this.apiUrl + '/images' + img._id);
  }

}
