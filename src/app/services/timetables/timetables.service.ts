import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TimetableInterface } from './timetable';

@Injectable({
  providedIn: 'root'
})
export class TimetablesService {
  public responseCache = new Map();


  constructor(private http: HttpClient) { }

  getTimetables(date: Date, clinic_id: number, branch_id: number, doctor_id: number) {

    const url = 'http://localhost:22080/v1/timetables';

    const fromCache = this.responseCache.get(url);
    if (fromCache) {
      return of(fromCache);
    }


    const response = this.http.get<TimetableInterface[]>(url).pipe(
      map((data) => {
        const timetables: TimetableInterface[] = [];
        for (let key in data) {
          timetables.push({ ...data[key] });
        }
        return timetables;
      }),
      tap(toCache => this.responseCache.set(url, toCache))
    );

    return response;
  }


}
