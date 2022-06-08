import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  private _css!: number;
  constructor() {}

  getBarCss(css: number): void {
    this._css = css;
    console.log('service', this._css);
  }
  get css(): Observable<number> {
    return of(this._css);
  }
}

// private _css: BehaviorSubject<any> = new BehaviorSubject<number>(
//   this._css
// ); //
// public $_css: Observable<number>;
// constructor() {
//   this.$_css = this._css.asObservable();
// }
// getBarCss(css: number): void {
//   // let obs = of(css);
//   // obs.subscribe({
//   //   next: (v) => {
//   //     this.css = v;
//   //     console.log(this.css);
//   //   },
//   // });
//   this._css = css;
//   // console.log('service', this._css);
// }
// get css(): Observable<number> {
//   return of(this._css);
// }
