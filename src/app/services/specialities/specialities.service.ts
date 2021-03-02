import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SpecialityInterface } from './speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {
  public responseCache = new Map();

  constructor(private http: HttpClient) { }

  getSpecialities() {


    const url = 'http://localhost:22080/v1/specialities?expand=doctors';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }



    return this.http.get<SpecialityInterface[]>(url).pipe(
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
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }
}
