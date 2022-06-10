import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private xSubject: Subject<number> = new Subject<number>();
  private cssX$: Observable<number> = this.xSubject.asObservable();
  // private mouseYSubject: Subject<number> = new Subject<number>();

  private buttonY!: number;
  private buttonX!: number;
  private mouseY!: number;
  private mouseX!: number;
  // calculation() {
  //   if (this.css < 0) {
  //     this.css = 0;
  //   }
  //   if (this.css > 400) {
  //     this.css = 400;
  //   }
  // }
  constructor() {}
  setMouseCrdnt(mouseX: number, mouseY: number) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.setIndicateBar();
  }
  setBtnCrdnt(x: number, y: number) {
    this.buttonX = x;
    this.buttonY = y;
    this.setIndicateBar();
  }
  // get btnX(): Observable<number> {
  //   console.log(this.btnX$);
  //   return this.btnX$;
  // }
  // get btnY(): Observable<number> {
  //   return this.btnY$;
  // }
  setIndicateBar(): number {
    let counterX: number = this.buttonX - this.mouseX;
    let counterY: number = this.mouseY - this.buttonY;
    let cssX: number = 0;

    if (counterX < this.buttonX + 200 || counterX > this.buttonX) {
      cssX = counterX / 2 + 400;
      this.xSubject.next(cssX);
      console.log(cssX, 'setBar');
      // this.calculation();

      // } else if (counterY < 200 - this.buttonY || counterY === this.buttonY) {
      //   this.css = 370 - counterY * 2;
      //   this.calculation();
      //   console.log(this.css, 'y');
    }
    return cssX;
  }
  get css(): Observable<number> {
    console.log(this.cssX$);
    return this.cssX$;
  }
}
