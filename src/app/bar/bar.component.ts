import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit, OnDestroy {
  private subscriptionX!: Subscription;
  private subscriptionY!: Subscription;
  public barCss!: number;

  public canShowBath: boolean = false;
  public canShowIndicator: boolean = false;
  public canShow: boolean = false;
  constructor(
    private _calcService: CalculationService,
    private router: Router
  ) {}
  getObservables() {
    this.subscriptionX = this._calcService.cssX.subscribe((v) => {
      if (v < 200 && v > 0) {
        this.barCss = 400 - v * 2;
      }
      if (v > -200 && v < 0) {
        this.barCss = 400 - Math.abs(v) * 2;
      }
    });

    this.subscriptionY = this._calcService.cssY.subscribe((v) => {
      if (v < 200 && v > 0) {
        this.barCss = 400 - v * 2;
      }
      if (v < -200) {
        this.barCss = 0;
      }
    });
  }

  ngOnInit(): void {
    this.getObservables();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.canShow = !(event.url === '/locked');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.canShowBath = !(event.url === '/bathroom2');
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.canShowIndicator = !(event.url === '/bathroom2');
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptionX.unsubscribe();
    this.subscriptionY.unsubscribe();
  }
}
