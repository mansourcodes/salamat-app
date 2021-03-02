import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BranchInterface } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  public responseCache = new Map();

  constructor(private http: HttpClient) { }

  getBranches() {

    const url = 'http://localhost:22080/v1/branches?expand=clinic,doctors';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }



    return this.http.get<BranchInterface[]>(url).pipe(
      map((data) => {
        const branches: BranchInterface[] = [];
        for (let key in data) {
          data[key].doctors_ids = data[key].doctors.map(doctor => {
            return doctor.id;
          })

          data[key].schedule_starting = this.toTime(data[key].schedule_starting);
          data[key].schedule_ending = this.toTime(data[key].schedule_ending);

          branches.push({ ...data[key] });
        }
        return branches;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }

  getBranch(id: number) {

    const url = 'http://localhost:22080/v1/branches/' + id;

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }



    return this.http.get<BranchInterface>(url).pipe(
      map((data) => {

        // data.doctors_ids = data.doctors.map(doctor => {
        //   return doctor.id;
        // })
        data.schedule_starting = this.toTime(data.schedule_starting);
        data.schedule_ending = this.toTime(data.schedule_ending);

        const branches: BranchInterface = data;
        return branches;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }


  toTime(timeString) {
    var timeTokens = timeString.split(':');
    return new Date(1970, 0, 1, timeTokens[0], timeTokens[1], timeTokens[2]);
  }
}
