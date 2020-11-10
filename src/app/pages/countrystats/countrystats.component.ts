import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-countrystats',
  templateUrl: './countrystats.component.html',
  styleUrls: ['./countrystats.component.css']
})
export class CountrystatsComponent implements OnInit {
  slug: string;
  country: Country;
  available: boolean;
  loaded = false;
  constructor(private _route: ActivatedRoute, private _data: DataService) {
    _route.params.subscribe(params => this.slug = params['iso2']);
  }

  ngOnInit(): void {
    this._data.getCountry(this.slug).subscribe((data: any[]) => {
      this.loaded = true;
      let len = data.length - 1;
      this.country = new Country(data[len].Country, this.slug, data[len].Confirmed, data[len].Deaths, data[len].Recovered);
      if (this.country.confirmed){
        this.available = true;
      } else {
        this.available = false;
      }
    })
  }

}
