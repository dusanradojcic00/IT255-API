import { Route } from '@angular/compiler/src/core';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-allstats',
  templateUrl: './allstats.component.html',
  styleUrls: ['./allstats.component.css']
})
export class AllStatsComponent implements OnInit {
  link: string;
  countries: any[];
  @HostBinding('class') classes = "mt-3 container";
  searchText: string;
  constructor(private _router: Router, private _data: DataService) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this._data.getCountries().subscribe((data: any[]) => {
      this.countries = data.map(item => {
        return new Country(item.Country, item.Slug);
      })
      this.countries.sort(this.sortCountries);
    })

  }

  public seeDetails(index) {
    let slug = this.countries[index].slug;
    this._router.navigate(['/stats', slug]);
  }

  public sortCountries(a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }
}
