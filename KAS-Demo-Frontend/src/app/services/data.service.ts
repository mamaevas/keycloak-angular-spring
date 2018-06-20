import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private backendUrl = 'http://localhost:8092/api';

  constructor(private http: HttpClient) {
  }

  public getAuth(path) {
    const url = `${this.backendUrl}/authenticate`;
    return this.http.get(url + path);
  }
}
