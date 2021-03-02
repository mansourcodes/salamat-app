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
    return this.http.get<DoctorInterface[]>('http://localhost:22080/v1/doctors?expand=specialization,branches').pipe(
      map((data) => {
        const doctors: DoctorInterface[] = [];
        for (let key in data) {
          data[key].branches_ids = data[key].branches.map(branch => {
            return branch.id;
          })

          doctors.push({ ...data[key] });
        }
        return doctors;
      })
    );
  }

  getDoctor(id: number) {
    return this.http.get<DoctorInterface>('http://localhost:22080/v1/doctors/' + id).pipe(
      map((data) => {
        // data.branches_ids = data.branches.map(branch => {
        //   return branch.id;
        // })
        const doctors: DoctorInterface = data;

        return doctors;
      })
    );
  }






}
