import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  // private btnXSubject: Subject<number> = new Subject<number>();
  // private btnYSubject: Subject<number> = new Subject<number>();
  // private btnX$: Observable<number> = this.btnXSubject.asObservable();
  // private btnY$: Observable<number> = this.btnYSubject.asObservable();
  buttonY!: number;
  buttonX!: number;
  mouseY!: number;
  mouseX!: number;
  // calculation() {
  //   if (this.css < 0) {
  //     this.css = 0;
  //   }
  //   if (this.css > 400) {
  //     this.css = 400;
  //   }
  // }
  constructor() {}

  setBtnCrdnt(x: number, y: number, mouseX: number, mouseY: number) {
    this.buttonX = x;
    this.buttonY = y;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    console.log(x, y, mouseX, mouseY);
  }
  // get btnX(): Observable<number> {
  //   console.log(this.btnX$);
  //   return this.btnX$;
  // }
  // get btnY(): Observable<number> {
  //   return this.btnY$;
  // }
  // indicateBar() {
  //   let counterX: number = this.buttonX - this.mouseX;
  //   let counterY: number = this.mouseY - this.buttonY;

  //   of(counterX)
  //     .pipe(
  //       map((v) => {
  //         if (v < this.buttonX + 200 || v > this.buttonX) {
  //           this.css = v / 2 + 400;
  //           this.calculation();
  //           this._barService.setBarCss(this.css);
  //         }
  //       })
  //     )
  //     .subscribe();

  //   of(counterY)
  //     .pipe(
  //       map((v) => {
  //         if (v < 200 - this.buttonY || v === this.buttonY) {
  //           this.css = 370 - v * 2;
  //           this.calculation();
  //           this._barService.setBarCss(this.css);
  //         }
  //       })
  //     )
  //     .subscribe();
  // }
}
