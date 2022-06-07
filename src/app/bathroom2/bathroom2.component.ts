import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bathroom2',
  templateUrl: './bathroom2.component.html',
  styleUrls: ['./bathroom2.component.css'],
})
export class Bathroom2Component implements OnInit {
  color!: string;

  constructor(private _utilityService: UtilityService) {}

  getColors() {
    this.color = this._utilityService.colors[3];
  }

  ngOnInit(): void {
    this.getColors();
  }
}
