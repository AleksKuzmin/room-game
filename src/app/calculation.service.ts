import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  // private mouseXSubject: Subject<number> = new Subject<number>();
  // private mouseYSubject: Subject<number> = new Subject<number>();
  private css!: number;
  private buttonY!: number;
  private buttonX!: number;
  private mouseY!: number;
  private mouseX!: number;
  calculation() {
    if (this.css < 0) {
      this.css = 0;
    }
    if (this.css > 400) {
      this.css = 400;
    }
  }
  constructor() {}
  setMouseCrdnt(mouseX: number, mouseY: number) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    console.log('mouse', mouseX, mouseY);
  }
  setBtnCrdnt(x: number, y: number) {
    this.buttonX = x;
    this.buttonY = y;
  }
  // get btnX(): Observable<number> {
  //   console.log(this.btnX$);
  //   return this.btnX$;
  // }
  // get btnY(): Observable<number> {
  //   return this.btnY$;
  // }
  indicateBar() {
    let counterX: number = this.buttonX - this.mouseX;
    let counterY: number = this.mouseY - this.buttonY;
    console.log('hello indicateBar');
    // if (v < this.buttonX + 200 || v > this.buttonX) {
    //   this.css = v / 2 + 400;
    //   this.calculation();

    // if (v < 200 - this.buttonY || v === this.buttonY) {
    //   this.css = 370 - v * 2;
    //   this.calculation();
  }
}
