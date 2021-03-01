import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BranchInterface } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor(private http: HttpClient) { }

  getBranches() {
    return this.http.get<BranchInterface[]>('http://localhost:22080/v1/branches?expand=clinic,doctors').pipe(
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
      })
    );
  }


  toTime(timeString) {
    var timeTokens = timeString.split(':');
    return new Date(1970, 0, 1, timeTokens[0], timeTokens[1], timeTokens[2]);
  }
}
