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

  constructor(private _swapi: SwapiService) { }

  ngOnInit() {
    this.wookie = false;

    this._swapi.getAllPlanets().subscribe(data => {
      this.planets = data;
      this.planets = this.planets.results;
      console.log(this.planets);
    })
  }

}
