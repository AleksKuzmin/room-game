import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-bedroom2',
  templateUrl: './bedroom2.component.html',
  styleUrls: ['./bedroom2.component.css'],
})
export class Bedroom2Component implements OnInit {
  public color: string = environment.bed2Color;
  private token: string = 'bathroom2';
  public isButtonClicked: boolean = false;
  public alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService
  ) {}

  random_alert() {
    return alert(this.alerts[Math.floor(Math.random() * this.alerts.length)]);
  }
  buttonClick() {
    this.random_alert();
    this._authService.userTokens.push(this.token);

    this.isButtonClicked = true;
  }
  ngOnInit(): void {}
}
