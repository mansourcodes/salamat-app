import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClinicInterface } from './clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(private http: HttpClient) { }

  getClinics() {
    return this.http.get<ClinicInterface[]>('http://localhost:22080/v1/clinics?expand=branches').pipe(
      map((data) => {
        const clinics: ClinicInterface[] = [];
        for (let key in data) {
          clinics.push({ ...data[key] });
        }

        clinics.sort(() => Math.random() - 0.5);

        return clinics;
      })
    );
  }



  getClinic(id: number) {
    return this.http.get<ClinicInterface>('http://localhost:22080/v1/clinics/' + id + '?expand=branches').pipe(
      map((data) => {
        const clinics: ClinicInterface = data;
        return clinics;
      })
    );
  }
}
