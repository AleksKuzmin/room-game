import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BarService } from '../bar.service';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit, OnDestroy {
  // private subscription!: Subscription;
  // public css!: number;
  // constructor(private _barService: BarService) {}
  // getCss() {
  //   this.subscription = this._barService.css.subscribe((v) => {
  //     this.css = v;
  //   });
  // }
  // ngOnInit(): void {
  //   this.getCss();
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  private subscription!: Subscription;
  public css!: number;
  public canShow: boolean = false;
  constructor(
    private _barService: BarService,
    private _calcService: CalculationService,
    private router: Router
  ) {}
  getCss() {
    this.subscription = this._calcService.css.subscribe((v) => {
      this.css = v;
      console.log(v);
    });
  }
  ngOnInit(): void {
    this.getCss();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.canShow = !(event.url === '/locked');
        console.log(event);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
