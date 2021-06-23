import { Component, OnInit } from '@angular/core';
import { ICountry } from '../interafaces';
import { CountryService } from '../services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  newCountry = { //form
    name: "",
    capital: "" 
  }

  public countries: ICountry[] = []

  constructor(private readonly _countriesService: CountryService) { }

  ngOnInit(): void {
    // this.countries = this._countriesService.getCountries();
    this._countriesService.getCountries().subscribe(data => {
      if (data) {
        this.countries = data.slice(0, 22)
        
      }
    });
  }

  public saveCountry(): void{
    this.newCountry.capital = this.newCountry.capital + 'City'
    this.countries.push(this.newCountry  )
    
    
  }
}
