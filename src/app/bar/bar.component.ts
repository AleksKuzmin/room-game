import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public css!: number;
  constructor(private _barService: BarService) {}
  getCss() {
    this.subscription = this._barService.css.subscribe((v) => {
      this.css = v;
    });
  }
  ngOnInit(): void {
    this.getCss();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
