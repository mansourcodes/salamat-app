import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppoInterface } from './appo';

@Injectable({
  providedIn: 'root'
})
export class ApposService {

  constructor(private http: HttpClient) { }

  getAppos() {
    return this.http.get<AppoInterface[]>('http://localhost:22080/v1/appointments?expand=clinic,doctor,branch,patient,branch.clinic,doctor.specialites,createdBy').pipe(
      map((data) => {
        const appos: AppoInterface[] = [];
        for (let key in data) {

          data[key].date = new Date(data[key].date);
          data[key].time = new Date(" 1/1/2000 " + data[key].time);

          appos.push({ ...data[key] });
        }
        return appos;
      })
    );
  }



  getAppoById(id): Observable<AppoInterface> {
    return this.http.get<AppoInterface>('http://localhost:22080/v1/appointments/' + id + '?expand=clinic,doctor,branch,patient,branch.clinic,doctor.specialites,createdBy').pipe(
      map((data) => {

        data.date = new Date(data.date);
        data.time = new Date(" 1/1/2000 " + data.time);

        const appo: AppoInterface = { ...data };
        return appo;
      })
    );
  }





}
