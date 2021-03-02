import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DoctorInterface } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  public responseCache = new Map();


  constructor(private http: HttpClient) { }

  getDoctors() {

    const url = 'http://localhost:22080/v1/doctors?expand=specialization,branches';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }


    const response = this.http.get<DoctorInterface[]>(url).pipe(
      map((data) => {
        const doctors: DoctorInterface[] = [];
        for (let key in data) {
          data[key].branches_ids = data[key].branches.map(branch => {
            return branch.id;
          })

          doctors.push({ ...data[key] });
        }
        return doctors;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );

    return response;
  }

  getDoctor(id: number) {

    const url = 'http://localhost:22080/v1/doctors/' + id;

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }

    return this.http.get<DoctorInterface>(url).pipe(
      map((data) => {
        // data.branches_ids = data.branches.map(branch => {
        //   return branch.id;
        // })
        const doctors: DoctorInterface = data;

        return doctors;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }






}
