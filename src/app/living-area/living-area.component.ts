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
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
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
  public css: number = 0;
  private mouseX!: number;
  private mouseY!: number;
  private buttonX!: number;
  private buttonY!: number;
  public color: string = environment.livingRoomColor;

  private token: string = 'bedroom1';
  public isButtonClicked: boolean = false;
  private alerts: string[] = [];
  constructor(
    private _utilityService: UtilityService,
    private _authService: AuthService,
    private _barService: BarService,
    private cd: ChangeDetectorRef
  ) {}

  getKeyAlerts() {
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
    this.buttonY = +bottom / 2;
    this.buttonX = +right / 2;
  }

  calculation() {
    if (this.css < 0) {
      this.css = 0;
    }
    if (this.css > 400) {
      this.css = 400;
    }
  }

  indicateBar() {
    let counterX: number = this.buttonX - this.mouseX;
    let counterY: number = this.mouseY - this.buttonY;

    of(counterX)
      .pipe(
        map((v) => {
          if (v < this.buttonX + 200 || v > this.buttonX) {
            this.css = v / 2 + 400;
            this.calculation();
            this._barService.setBarCss(this.css);
          }
        })
      )
      .subscribe();

    of(counterY)
      .pipe(
        map((v) => {
          if (v < 200 - this.buttonY || v === this.buttonY) {
            this.css = 370 - v * 2;
            this.calculation();
            this._barService.setBarCss(this.css);
          }
        })
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.getKeyAlerts();
  }
  ngAfterViewInit(): void {
    this.getCoordinates();
  }
  ngAfterViewChecked(): void {
    this.indicateBar();
    this.cd.detectChanges();
  }
}
