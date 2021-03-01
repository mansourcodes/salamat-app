import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DoctorInterface } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getDoctors() {
    return this.http.get<DoctorInterface[]>('http://localhost:22080/v1/doctors?expand=specialization').pipe(
      map((data) => {
        const doctors: DoctorInterface[] = [];
        for (let key in data) {
          doctors.push({ ...data[key] });
        }
        return doctors;
      })
    );
  }
}
