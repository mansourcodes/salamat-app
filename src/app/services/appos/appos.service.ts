import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppoInterface } from './appo';

@Injectable({
  providedIn: 'root'
})
export class ApposService {

  constructor(private http: HttpClient) { }

  getAppos() {
    return this.http.get<AppoInterface[]>('http://localhost:22080/v1/appointments').pipe(
      map((data) => {
        const appos: AppoInterface[] = [];
        for (let key in data) {
          appos.push({ ...data[key] });
        }
        return appos;
      })
    );
  }
}
