import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bathroom2',
  templateUrl: './bathroom2.component.html',
  styleUrls: ['./bathroom2.component.css'],
})
export class Bathroom2Component implements OnInit {
  color: string = environment.bath2Color;

  constructor(private _utilityService: UtilityService) {}

  ngOnInit(): void {}
}
