import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { getCurrentLang } from 'src/app/store/settings/settings.selectors';
import { LanguageInterface } from '../settings/setting';
import { CountryInterface } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  public responseCache = new Map();
  currentLang: LanguageInterface;
  currentLangSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private store: Store<AppState>
  ) { }

  getCountries() {

    return this.store.select(getCurrentLang).pipe(
      switchMap(currentLang => {

        const url = `../../assets/db/countries/${currentLang.key}.json`;

        const fromCache = this.responseCache.get(url);
        if (fromCache) {
          return of(fromCache);
        }

        const response = this.http.get<CountryInterface[]>(url).pipe(
          map((data) => {
            const doctors: CountryInterface[] = [];
            for (let key in data) {
              doctors.push({ ...data[key] });
            }
            return doctors;
          }),
          tap(toCache => this.responseCache.set(url, toCache))
        );

        return response;
      })
    );

  }


}
