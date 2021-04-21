import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  wookie!: boolean;
  planets?: any;
  params?: string;
  loading: boolean = true;

  constructor(private _swapi: SwapiService) { }

  loadData(params?: string) {
    this.loading = true;
    this._swapi.getPluralResources("planets", params).subscribe(data => {
      this.planets = data;
      this.planets = this.planets.results;
      this.loading = false;
    })
  }

  ngOnInit() {
    this.wookie = false;
    this.loadData();
  }

}
