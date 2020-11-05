import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';
import { CardFilterComponentComponent } from './card-filter-component/card-filter-component.component';
import { LoaderComponentComponent } from './shared/loader-component/loader-component.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponentComponent,
    CardFilterComponentComponent,
    LoaderComponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    MatProgressSpinnerModule  
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
