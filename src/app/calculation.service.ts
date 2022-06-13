import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private xSubject: Subject<number> = new Subject<number>();
  private cssX$: Observable<number> = this.xSubject.asObservable();
  private ySubject: Subject<number> = new Subject<number>();
  private cssY$: Observable<number> = this.ySubject.asObservable();

  private buttonY!: number;
  private buttonX!: number;
  private mouseY!: number;
  private mouseX!: number;

  constructor() {}
  setMouseCrdnt(mouseX: number, mouseY: number) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;

    this.setX();
    this.setY();
  }
  setBtnCrdnt(x: number, y: number) {
    this.buttonX = x - 8;
    this.buttonY = y - 28;
    this.setX();
    this.setY();
    console.log(x, y);
  }

  setX(): number {
    let cssX: number = 0;
    if (this.mouseX > 200) {
      cssX = this.buttonX - this.mouseX;
    }

    this.xSubject.next(cssX);

    return cssX;
  }
  setY(): number {
    let cssY: number = 0;
    if (200 < this.mouseY) cssY = this.buttonY - this.mouseY;

    this.ySubject.next(cssY);

    return cssY;
  }

  get cssX(): Observable<number> {
    return this.cssX$;
  }

  get cssY(): Observable<number> {
    return this.cssY$;
  }
}
