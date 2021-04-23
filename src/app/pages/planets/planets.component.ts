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
  total!: number;
  params?: string;
  page: number = 1;
  loading: boolean = true;

  constructor(private _swapi: SwapiService) { }

  loadData(page: number, params?: string) {
    this.loading = true;
    this._swapi.getPluralResources("planets", page, params).subscribe(data => {
      this.planets = data;
      this.total = this.planets.count;
      this.planets = this.planets.results;
      this.loading = false;
    })
  }

  nextPage(index: number){
    this.loadData(index);
    this.page = index;
  }

  ngOnInit() {
    this.wookie = false;
    this.loadData(this.page);
  }

}
