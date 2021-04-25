import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetCard',
  templateUrl: './planetCard.component.html',
  styleUrls: ['./planetCard.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: any;

  constructor() { }

  ngOnInit() {
  }

}
