import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Country } from '../models/country.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = "https://api.covid19api.com/countries";
  API_URL_COUNTRY = "https://api.covid19api.com/live/country/";

  constructor(private _http: HttpClient) { }

  getCountries() {
    return this._http.get(this.API_URL);
  }

  getCountry(slug: string) {
    return this._http.get(this.API_URL_COUNTRY + slug);
  }
}
