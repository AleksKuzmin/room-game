import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bedroom1',
  templateUrl: './bedroom1.component.html',
  styleUrls: ['./bedroom1.component.css'],
})
export class Bedroom1Component implements OnInit {
  color: string = environment.bed1Color;
  token: string = 'bathroom1';
  isButtonClicked: boolean = false;
  alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService
  ) {}

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
    this.getAlerts();
  }
}
