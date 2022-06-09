import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  private cssSubject: Subject<number> = new Subject<number>();
  private css$: Observable<number> = this.cssSubject.asObservable();
  private _css!: number;
  constructor() {}

  setBarCss(css: number): void {
    this.cssSubject.next(css);
  }
  get css(): Observable<number> {
    return this.css$;
  }
}
