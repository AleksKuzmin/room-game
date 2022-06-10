import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private livingRoomColor = environment.livingRoomColor;
  private kitchenRoomColor = environment.kitchenRoomColor;
  private bath1Color = environment.bath1Color;
  private bath2Color = environment.bath2Color;
  private bed1Color = environment.bed1Color;
  private bed2Color = environment.bed2Color;
  private roomColorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('black');
  private roomColor$: Observable<string> = this.roomColorSubject.asObservable();

  colorsObj = {
    living: this.livingRoomColor,
    kitchen: this.kitchenRoomColor,
    bathroom1: this.bath1Color,
    bathroom2: this.bath2Color,
    bedroom1: this.bed1Color,
    bedroom2: this.bed2Color,
  };

  keyAlerts = [
    'Cool a key! I wonder what it unlocks..',
    'Somebody is probably looking for this right now..',
    ' Great, I needed one of these for my piano!',
    'Why would somebody leave that there?',
    'KiKi do you love me… ahh now that song is stuck in my head',
  ];

  setLockedDoorColor(room: string) {
    for (let [key, color] of Object.entries(this.colorsObj)) {
      if (room === key) {
        this.roomColorSubject.next(color);
      }
    }
  }

  get roomColor(): Observable<string> {
    return this.roomColor$;
  }
}
