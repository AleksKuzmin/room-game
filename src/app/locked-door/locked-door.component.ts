import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Subscription } from 'rxjs';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-locked-door',
  templateUrl: './locked-door.component.html',
  styleUrls: ['./locked-door.component.css'],
})
export class LockedDoorComponent implements OnInit, OnDestroy {
  color!: string;
  subscription!: Subscription;
  constructor(private utilityService: UtilityService) {}
  changeColor() {
    this.subscription = this.utilityService.lockColor?.subscribe(
      (res) => {
        this.color = res;
        console.log(typeof this.color);
      }
      // (err) => {
      //   console.error('Observer got an error: ' + err);
      // }
      // () => {
      //   console.log('Observer got a complete notification');
      // }
    );
  }
  ngOnInit(): void {
    this.changeColor();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
