import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bathroom1',
  templateUrl: './bathroom1.component.html',
  styleUrls: ['./bathroom1.component.css'],
})
export class Bathroom1Component implements OnInit {
  public color!: string;
  token: string = 'kitchen';
  isButtonClicked: boolean = false;
  alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService
  ) {}

  getColors() {
    this.color = this._utilityService.colors[2];
  }
  getAlerts() {
    this.alerts = this._utilityService.keyAlerts;
  }
  random_alert() {
    return alert(this.alerts[Math.floor(Math.random() * this.alerts.length)]);
  }
  buttonClick() {
    this.random_alert();
    this._authService.userTokens.push(this.token);

    this.isButtonClicked = true;
  }
  ngOnInit(): void {
    this.getColors();
    this.getAlerts();
  }
}
