import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ClinicInterface } from './clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  public responseCache = new Map();


  constructor(private http: HttpClient) { }

  getClinics() {

    const url = 'http://localhost:22080/v1/clinics?expand=branches';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }


    return this.http.get<ClinicInterface[]>(url).pipe(
      map((data) => {
        const clinics: ClinicInterface[] = [];
        for (let key in data) {
          clinics.push({ ...data[key] });
        }

        clinics.sort(() => Math.random() - 0.5);

        return clinics;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }



  getClinic(id: number) {

    const url = 'http://localhost:22080/v1/clinics/' + id + '?expand=branches';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      // return of(fromCache);
    }


    return this.http.get<ClinicInterface>(url).pipe(
      map((data) => {
        const clinics: ClinicInterface = data;
        return clinics;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );
  }
}
