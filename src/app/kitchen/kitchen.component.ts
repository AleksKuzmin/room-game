import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { CalculationService } from '../calculation.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit, AfterViewInit {
  @ViewChild('button', { static: false }) public button?: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any): any {
    const obj = e;
    const { pageX: pageX, pageY: pageY } = obj;
    this._calculationService.setMouseCrdnt(pageX, pageY);
  }
  private buttonX!: number;
  private buttonY!: number;
  public color: string = environment.kitchenRoomColor;
  private token: string = environment.tokenB2;
  public isButtonClicked: boolean = false;
  private alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService,
    private _calculationService: CalculationService
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
  getCoordinates() {
    const obj = this.button?.nativeElement.getBoundingClientRect();
    const { bottom: bottom, right: right } = obj;
    this.buttonY = bottom;
    this.buttonX = right;
    this._calculationService.setBtnCrdnt(this.buttonX, this.buttonY);
  }
  ngOnInit(): void {
    this.getAlerts();
    if (this._authService.userTokens.includes(this.token)) {
      this.isButtonClicked = true;
    }
  }
  ngAfterViewInit(): void {
    this.getCoordinates();
  }
}
