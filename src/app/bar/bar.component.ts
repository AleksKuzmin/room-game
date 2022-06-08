import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit, AfterViewInit {
  css!: any;
  constructor(private _barService: BarService) {}
  getCss() {
    this.css = this._barService.css.subscribe((v) => {
      console.log('bar', v);
    });
  }
  ngOnInit(): void {
    this.getCss();
  }
  ngAfterViewInit(): void {
    this.getCss();
  }
}
