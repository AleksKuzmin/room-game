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
    this.buttonX = x;
    this.buttonY = y;
    this.setX();
    this.setY();
  }

  setX(): number {
    let cssX: number = 0;
    if (this.mouseX < 200) cssX = this.mouseX - this.buttonX / 2;
    this.xSubject.next(cssX);
    return cssX;
  }
  setY(): number {
    let cssY: number = 0;
    if (this.mouseY < 200) cssY = this.mouseY - this.buttonY / 2;

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
