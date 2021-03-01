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
    return this.http.get<BranchInterface[]>('http://localhost:22080/v1/branches?expand=clinic').pipe(
      map((data) => {
        const branches: BranchInterface[] = [];
        for (let key in data) {
          branches.push({ ...data[key] });
        }
        return branches;
      })
    );
  }
}
