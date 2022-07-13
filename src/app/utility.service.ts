// The standard branch name you should pick as first one is master
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
// Folder structure: Global services should stay in services folder and component level service should be beside the components
export class UtilityService {
  // Can use a code formatter to beautify the code
  private livingRoomColor = environment.livingRoomColor;
  // Why we need all thses private variables? Can simply use environment['livingRoomColor'] wherever we need it
  private kitchenRoomColor = environment.kitchenRoomColor;
  private bath1Color = environment.bath1Color;
  private bath2Color = environment.bath2Color;
  private bed1Color = environment.bed1Color;
  private bed2Color = environment.bed2Color;
  private roomColorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('black');
    // Can be achieved without using observable? I mean use these swords when you really need them 
  private roomColor$: Observable<string> = this.roomColorSubject.asObservable();

  // This object is also not necessary
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
    // can simply use environment['livingRoomColor'] in the component
    for (let [key, color] of Object.entries(this.colorsObj)) {
      if (room === key) {
        debugger;
        this.roomColorSubject.next(color);
      }
    }
  }

  get roomColor(): Observable<string> {
    return this.roomColor$;
  }
}
