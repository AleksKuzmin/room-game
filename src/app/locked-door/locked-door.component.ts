import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-locked-door',
  templateUrl: './locked-door.component.html',
  styleUrls: ['./locked-door.component.css'],
})
export class LockedDoorComponent implements OnInit, OnDestroy {
  color!: string;
  // subscription!: Subscription;
  constructor(private utilityService: UtilityService) {}
  changeColor() {
    // this.subscription = this.utilityService.lockColor?.subscribe((res) => {
    //   this.color = res;
    //   console.log(this.color);
    // });
    this.color = this.utilityService.lockColor;
  }

  ngOnInit(): void {
    this.changeColor();
  }
  ngOnDestroy(): void {
    // if (this.subscription != null) {
    //   this.subscription?.unsubscribe();
    // }
  }
}
