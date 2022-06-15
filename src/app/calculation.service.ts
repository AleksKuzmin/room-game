import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  private hSubject: Subject<number> = new Subject<number>();
  private cssH$: Observable<number> = this.hSubject.asObservable();

  private buttonY!: number;
  private buttonX!: number;
  private mouseY!: number;
  private mouseX!: number;

  constructor() {}
  setMouseCrdnt(mouseX: number, mouseY: number) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.pifagorTheorem();
  }
  setBtnCrdnt(x: number, y: number) {
    this.buttonX = x;
    this.buttonY = y;
  }

  pifagorTheorem(): number {
    let hypotenuse = Math.sqrt(
      (this.buttonX - this.mouseX - 20) ** 2 +
        (this.buttonY - this.mouseY - 20) ** 2
    );
    this.hSubject.next(hypotenuse);
    return hypotenuse;
  }

  get cssH(): Observable<number> {
    return this.cssH$;
  }
}
