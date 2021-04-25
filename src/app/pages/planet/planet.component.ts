import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SwapiService } from 'src/swapi.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @Input() path?: string;

  planetData?: any;
  wookie: boolean = false;

  constructor(private _swapi: SwapiService) { }

  loadData() {
    if (this.path) {
      this.planetData = this._swapi.getObjectByPath(this.path);
      this.planetData = this.planetData.results;
    }
  }

  ngOnInit() {
    this.loadData();
  }

}
