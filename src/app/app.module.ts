import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import { StoreModule } from '@ngrx/store';
import { AppEffects, appReducers } from './store/app.state';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, MainmenuComponent, LoadingSpinnerComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),

    EffectsModule.forRoot(AppEffects),
    StoreModule.forRoot(appReducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    // StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
