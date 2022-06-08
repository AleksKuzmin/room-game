import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { map, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { BarService } from '../bar.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-living-area',
  templateUrl: './living-area.component.html',
  styleUrls: ['./living-area.component.css'],
})
export class LivingAreaComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  @ViewChild('button', { static: false }) public button?: ElementRef;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any): any {
    const obj = e;

    const { pageX: pageX, pageY: pageY } = obj;
    this.mouseX = pageX;
    this.mouseY = pageY;
  }
  css: number = 0;
  mouseX!: number;
  mouseY!: number;
  buttonX!: number;
  buttonY!: number;
  color!: string;
  token: string = 'bedroom1';
  isButtonClicked: boolean = false;
  alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService,
    private _barService: BarService,
    private cd: ChangeDetectorRef
  ) {}

  getColors() {
    this.color = this._utilityService.colors[0];
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
  calculation() {
    if (this.css >= 100) {
      this.css = 100;
    }
    if (this.css < 0) {
      this.css = 0;
    }
  }
  indicateBar() {
    let counterX: number = this.mouseX - this.buttonX;
    let counterY: number = this.mouseY - this.buttonY;

    let barObservableX = of(counterX)
      .pipe(
        map((v) => {
          if (v < 224 || v > 24) {
            this.css = v / 2;
            this.calculation();
            this._barService.getBarCss(this.css);
            // console.log('living area', this.css);
          }
        })
      )
      .subscribe();

    let barObservableY = of(counterY)
      .pipe(
        map((v) => {
          if (v < 224 || v > 24) {
            this.css = v / 2;
            this.calculation();
          }
        })
      )
      .subscribe();
  }

  getCoordinates() {
    const obj = this.button?.nativeElement.getBoundingClientRect();
    const { bottom: bottom, right: right } = obj;
    this.buttonY = +bottom / 2;
    this.buttonX = +right / 2;
  }
  ngAfterViewInit(): void {
    this.getCoordinates();
    this.cd.detectChanges();
  }
  ngAfterViewChecked(): void {
    this.indicateBar();
    this.cd.detectChanges();
  }
}
