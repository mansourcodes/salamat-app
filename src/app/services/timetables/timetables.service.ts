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

    const url = `http://localhost:22080/v1/timetables?clinic_id=${clinic_id}&branch_id=${branch_id}&doctor_id=${doctor_id}&date=${this.formatDate(date)}`;

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

  formatDate(date: Date) {

    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
