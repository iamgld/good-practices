import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _http: HttpClient) {}

  upload() {
    const headers = new HttpHeaders({
      Authentication: '',
    });

    const payload = {
      hola: 'mundo',
      archivo: file,
    };

    // const file = new File() Blob()
    const formdata = new FormData();
    formdata.append('archivo', file);
    formdata.append('payload', JSON.stringify(payload));
    // JSON.parse(payload);

    return this._http.post('upload-images', formdata, { headers });
  }
}
