import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PatientInterface } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getPatients() {
    return this.http.get<PatientInterface[]>('http://localhost:22080/v1/patients').pipe(
      map((data) => {
        const patients: PatientInterface[] = [];
        for (let key in data) {
          patients.push({ ...data[key] });
        }
        return patients;
      })
    );
  }
}
