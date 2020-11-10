import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AllStatsComponent } from './pages/allstats/allstats.component';
import { CountrystatsComponent } from './pages/countrystats/countrystats.component';
import { CountryFilterPipe } from './helpers/countryfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'stats', component: AllStatsComponent },
  { path: 'stats/:iso2', component: CountrystatsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllStatsComponent,
    CountrystatsComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
