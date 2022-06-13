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
  private subscription!: Subscription;

  public barCss!: number;
  public canShowBath: boolean = false;
  public canShowIndicator: boolean = false;
  public canShow: boolean = false;
  constructor(
    private _calcService: CalculationService,
    private router: Router
  ) {}
  getObservables(): any {
    this.subscription = this._calcService.cssH.subscribe((v) => {
      if (v > 200) this.barCss = 0;
      if (v < 200) this.barCss = 400 - v * 2;
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
    this.subscription.unsubscribe();
  }
}
