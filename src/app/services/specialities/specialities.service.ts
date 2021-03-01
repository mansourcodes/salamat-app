import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SpecialityInterface } from './speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {

  constructor(private http: HttpClient) { }

  getSpecialities() {
    return this.http.get<SpecialityInterface[]>('http://localhost:22080/v1/specialities?expand=doctors').pipe(
      map((data) => {
        const specialities: SpecialityInterface[] = [];
        for (let key in data) {
          if (data[key].doctors.length <= 0) {
            continue;
          }
          specialities.push({ ...data[key] });
        }

        specialities.sort((a, b) => (a.doctors.length < b.doctors.length) ? 1 : -1)
        return specialities;
      })
    );
  }
}
