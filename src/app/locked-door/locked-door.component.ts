import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-locked-door',
  templateUrl: './locked-door.component.html',
  styleUrls: ['./locked-door.component.css'],
})
export class LockedDoorComponent implements OnInit, OnDestroy {
  public living = environment.livingRoomColor;
  public kitchen = environment.kitchenRoomColor;
  public bath1 = environment.bath1Color;
  public bath2 = environment.bath2Color;
  public bed1 = environment.bed1Color;
  public bed2 = environment.bed2Color;
  private subscription!: Subscription;

  public color!: string;

  constructor(private utilityService: UtilityService) {}
  changeColor() {
    this.subscription = this.utilityService.roomColor.subscribe((v) => {
      this.color = v;
      console.log(v);
    });
  }

  ngOnInit(): void {
    this.changeColor();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
